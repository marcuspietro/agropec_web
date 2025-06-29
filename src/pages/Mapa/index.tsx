import { BoxCardExpositor, BoxCardExpositorContent, BoxFooterExpositor, BtnHeadeListMenuExpositoresMapa, BtnHeadeListMenuMapa, BtnHeaderHome, ButtonNav, Container, ContainerPermission, ListHeaderMenuMapa, MenuHeaderMapa } from "./styles"
import { useTheme } from "styled-components";

import { useCallback, useEffect, useRef, useState } from "react";
import { CaretLeftIcon, CrosshairIcon, ListIcon, MapPinAreaIcon, PathIcon } from "@phosphor-icons/react";

import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import type { PointsMap } from "../../database/expositores";
import { useNavigate } from "react-router-dom";
import { API_AGROPEC_STATIC } from "../../services/api";
import { useApp } from "../../hooks/app";

const centerInicial = { lat: -2.989505, lng: -47.355947 };

const containerStyle = {
  width: '100%',
  height: '100vh'
};

export const Mapa: React.FC = () => {

  const { allExpositores } = useApp();

  const theme = useTheme();

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_API_GOOGLE_MAPS,
  });

  const [expositores, setExpositores] = useState<PointsMap[]>(allExpositores);

  const [userPosition, setUserPosition] = useState<{ lat: number; lng: number } | null>(null);

  const [permission, setPermission] = useState<'granted' | 'prompt' | 'denied' | null>(null);

  const [isExpositor, setIsExpositor]  = useState<PointsMap | null>(null);

  const mapRef = useRef<google.maps.Map | null>(null);

  const onLoad = useCallback((map: google.maps.Map) => {
    mapRef.current = map;
  }, []);

  const centerOnUserAndEvent = () => {
    if (!mapRef.current || !userPosition) return;

    const bounds = new google.maps.LatLngBounds();
    bounds.extend(userPosition);
    bounds.extend(centerInicial);

    mapRef.current.fitBounds(bounds, 100);
  };

  const centerOnUserOnly = () => {
    if(!userPosition) return;

    mapRef.current?.panTo(userPosition);
    mapRef.current?.setZoom(17);
  };

  const navigate = useNavigate();

  const handleModalExpositor = (expos: PointsMap) => {
    setIsExpositor(expos);
  }

  useEffect(() => {
    setExpositores(allExpositores)
  }, [allExpositores])

  useEffect(() => {

    navigator.geolocation.watchPosition(
      (pos) => {
        setUserPosition({ lat: pos.coords.latitude, lng: pos.coords.longitude });

        if (mapRef.current) {

          mapRef.current.panTo({ lat: pos.coords.latitude, lng: pos.coords.longitude });
          mapRef.current.setZoom(17);
        }
      },
      () => {},
      { enableHighAccuracy: true }
    );
  }, []);

  useEffect(() => {
    let permissionStatus: PermissionStatus;

    navigator.permissions
      .query({ name: 'geolocation' })
      .then((status) => {
        permissionStatus = status;
        setPermission(status.state);

        status.onchange = () => {
          setPermission(status.state);
        };
      })
      .catch((err) => {
        console.error('Erro ao verificar permissão de geolocalização:', err);
      });

    return () => {
      if (permissionStatus) {
        permissionStatus.onchange = null;
      }
    };
  }, []);

  useEffect(() => {

    setExpositores(allExpositores);

  }, [allExpositores]);

  if(!isLoaded) {

    return (
      <ContainerPermission>
        <p>
          Carregando...
        </p>
      </ContainerPermission>
    )
  }

  return permission !== "granted" ? 
    <ContainerPermission>
      <p>
        Você precisa permitir que a aplicação tenha acesso a
        localização para acessar essa funcionalidade. Por favor, acesse as
        configurações do seu dispositivo para conceder a permissão.
      </p>

      <p>
        Atualize a tela depois de permitir!
      </p>
    </ContainerPermission>
  : (
    <Container>

      <MenuHeaderMapa>
        <BtnHeaderHome onClick={() => navigate(-1)}>
          <CaretLeftIcon
            size={24} 
            weight='bold' 
            color={theme.COLORS.BRAND_MID}
          />
        </BtnHeaderHome>

        <ListHeaderMenuMapa>

          <BtnHeadeListMenuMapa onClick={centerOnUserAndEvent}>
            <PathIcon
              size={24} 
              weight='bold' 
              color={theme.COLORS.BRAND_MID}
            />
          </BtnHeadeListMenuMapa>

          <BtnHeadeListMenuMapa onClick={centerOnUserOnly}>
            <CrosshairIcon
              size={24} 
              weight='bold' 
              color={theme.COLORS.BRAND_MID}
            />
          </BtnHeadeListMenuMapa>

          <BtnHeadeListMenuExpositoresMapa onClick={() => navigate("/expositores")}>
            <ListIcon
              size={24} 
              weight='bold' 
              color={theme.COLORS.WHITE}
            />
          </BtnHeadeListMenuExpositoresMapa>

        </ListHeaderMenuMapa>
      </MenuHeaderMapa>

      <GoogleMap
        mapContainerStyle={containerStyle}
        center={centerInicial}
        zoom={15}
        onLoad={onLoad}
        options={{
          disableDefaultUI: true,
          styles: [
            {
              featureType: 'poi',
              elementType: 'all',
              stylers: [{ visibility: 'off' }]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{ lightness: 100 }]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{ color: '#CCCCCC' }]
            }
          ]
        }}
      >
        {expositores.map((expos) => (
          <Marker
            key={expos.id}
            position={{ lat: expos.latitude, lng: expos.longitude }}
            title={expos.name}
            icon={{
              url: `${API_AGROPEC_STATIC}${expos.thumb}`,
              scaledSize: new window.google.maps.Size(30, 30),
            }}
            onClick={() => { handleModalExpositor(expos) }}
          />
        ))}

        {userPosition && (
          <Marker
            position={userPosition}
            icon={{
              path: google.maps.SymbolPath.CIRCLE,
              scale: 8,
              fillColor: theme.COLORS.BRAND_LIGHT,
              fillOpacity: 1,
              strokeWeight: 2,
              strokeColor: 'white',
            }}
          />
        )}

      </GoogleMap>

      {isExpositor && (
        <BoxFooterExpositor>

          <BoxCardExpositor>

            <BoxCardExpositorContent>
              <img
                src={`${API_AGROPEC_STATIC}${isExpositor.thumb}`}
                alt={isExpositor.name}
              />

              <div>
                <strong>{isExpositor.segment}</strong>

                <h3>{isExpositor.name}</h3>
              </div>
            </BoxCardExpositorContent>

            <ButtonNav to={`/expositores/${isExpositor.id}`}>
              Conhecer

              <MapPinAreaIcon color={theme.COLORS.WHITE} size={20} />
            </ButtonNav>

          </BoxCardExpositor>

        </BoxFooterExpositor>
      )}
    </Container>
  )
}