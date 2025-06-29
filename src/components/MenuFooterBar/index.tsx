import { CalendarBlankIcon, HouseIcon, MapPinIcon } from "@phosphor-icons/react"
import { ButtonMenu, CardFooter, Content, IconMenu, TextSegmento } from "./styles"
import { useTheme } from "styled-components";

type Props = {
  btnActive: "home" | "mapa" | "agenda";
}

export const MenuFooterBar = ({ btnActive }: Props) => {

  const theme = useTheme();

  return (
    <CardFooter>

      <Content>
        
        <ButtonMenu
          to="/home"
          isActive={btnActive === "home"}
          style={btnActive === "home" ? { flex: 1 }: {}}
        >
          <IconMenu>
            <HouseIcon
              size={26} color={btnActive === "home" ? theme.COLORS.WHITE:theme.COLORS.BRAND_MID}
              weight={btnActive === "home" ? "fill":"bold"}
            />
          </IconMenu>

          {btnActive === "home" && (
            <TextSegmento>
              Início
            </TextSegmento>
          )}
        </ButtonMenu>

        <ButtonMenu
          to="/mapa"
          isActive={btnActive === "mapa"}
          style={btnActive === "mapa" ? { flex: 1 }: {}}
        >
          <IconMenu>
            <MapPinIcon
              size={26} color={btnActive === "mapa" ? theme.COLORS.WHITE:theme.COLORS.BRAND_MID}
              weight={btnActive === "mapa" ? "fill":"bold"}
            />
          </IconMenu>

          {btnActive === "mapa" && (
            <TextSegmento>
              Mapa
            </TextSegmento>
          )}
        </ButtonMenu>

        <ButtonMenu
          to="/agenda"
          isActive={btnActive === "agenda"}
          style={btnActive === "agenda" ? { flex: 1 }: {}}
        >
          <IconMenu>
            <CalendarBlankIcon
              size={26} color={btnActive === "agenda" ? theme.COLORS.WHITE:theme.COLORS.BRAND_MID}
              weight={btnActive === "agenda" ? "fill":"bold"}
            />
          </IconMenu>

          {btnActive === "agenda" && (
            <TextSegmento>
              Agenda
            </TextSegmento>
          )}
        </ButtonMenu>

      </Content>

    </CardFooter>
  )
}