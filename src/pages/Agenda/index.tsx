import { ButtonCategory, CardEvent, Container, ContainerContentCategories, ContainerContentDays, ContainerContentEvents, ContentDays, ContentEvent, DescriptionContentEvent, LocaleEvent, LogoMiniCard, OptionEventDay, TextCategory, TitleContentEvent, TitleContentEventGeneric, TitleEventDay, TitleNameDayEvent, TitleNumberDayEvent } from "./styles"
import { useTheme } from "styled-components";

import { useEffect, useState } from "react";
import { MenuFooterBar } from "../../components/MenuFooterBar";
import { HeaderDefaultGoBack } from "../../components/HeaderDefaultGoBack";
import { daysEvents, type ICategory, type IDateSchedule, type IEventSchedule } from "../../database/agenda";
import { ClockIcon, MapPinAreaIcon } from "@phosphor-icons/react";
import { API_AGROPEC_STATIC } from "../../services/api";
import { useApp } from "../../hooks/app";

export const Agenda: React.FC = () => {

  const { loadingCore, fetchEventsAll } = useApp();
  const [allEvents, setAllEvents] = useState<IEventSchedule[]>([]);

  const [categories, setCaregories] = useState<ICategory[]>([]);

  const [listEventsActive, setListEventsActive] = useState<IEventSchedule[]>([]);

  const theme = useTheme();

  const [dateActive, setDateActive] = useState<IDateSchedule>(daysEvents[0]);

  function handleAlterDate(dateSelected: IDateSchedule) {
    setDateActive(dateSelected);

    const eventsForDate = allEvents.filter((eventItem: IEventSchedule) => eventItem.day === dateSelected.day);

    setListEventsActive(eventsForDate);

  }

  function handleAlterListForCategory(category: string) {

    const eventsForDate = allEvents.filter((eventItem: IEventSchedule) => eventItem.day === dateActive.day);
    const newListForCategory = eventsForDate.filter(point => point.category === category);

    setListEventsActive(newListForCategory);

  }

  useEffect(() => {

    fetchEventsAll()
    .then(({ categories: dataCategories, eventsAll: dataEvents }) => {

      setAllEvents(dataEvents);
      setCaregories(dataCategories);
      
    });

  }, [])

  useEffect(() => {

    const eventsForDate = allEvents.filter((eventItem: IEventSchedule) => eventItem.day === daysEvents[0].day);

    setListEventsActive(eventsForDate);

  }, [allEvents]);

  return (
    <body style={{ backgroundColor: theme.COLORS.WHITE }}>
      <Container>

        <HeaderDefaultGoBack isText="Agenda" />

        <TitleEventDay>
          {`${dateActive.name_date}, ${dateActive.day} de Agosto`}
        </TitleEventDay>

        <ContainerContentDays>
          <ContentDays>
            {daysEvents.map(day => {

              return (
                <OptionEventDay key={day.day} onClick={() => handleAlterDate(day)} isActive={day.day === dateActive.day}>
                  <TitleNumberDayEvent isActive={day.day === dateActive.day}>
                    { day.day }
                  </TitleNumberDayEvent>

                  <TitleNameDayEvent isActive={day.day === dateActive.day}>
                    { day.name_date.slice(0, 3) }
                  </TitleNameDayEvent>
                </OptionEventDay>
              )
            })}
          </ContentDays>
        </ContainerContentDays>

        <ContainerContentCategories>
          <ContentDays>
            {[...categories].map(category => {

              return (
                <ButtonCategory key={category.id} onClick={() => handleAlterListForCategory(category.name)}>
                  <TextCategory>
                    {category.name}
                  </TextCategory>
                </ButtonCategory>
              )
            })}
          </ContentDays>
        </ContainerContentCategories>

      </Container>

      <ContainerContentEvents>
        {loadingCore ?

          <TitleContentEvent style={{ textAlign: "center", paddingTop: "30px", fontSize: "1rem" }}>
            Carregando...
          </TitleContentEvent> 

        : listEventsActive.map((eventData, index) => {

          return (
            <CardEvent key={eventData.id} style={index % 2 === 0 ? { backgroundColor: theme.COLORS.BRAND_ULTRA_MEGA_LIGHT}:{}}>
              <LogoMiniCard
                src={API_AGROPEC_STATIC+eventData.thumb}
                alt="Evento"
              />

              <ContentEvent>
                <TitleContentEvent>
                  {eventData.title}
                </TitleContentEvent>

                <DescriptionContentEvent>
                  {eventData.description}
                </DescriptionContentEvent>

                <LocaleEvent>
                  <MapPinAreaIcon size={20} color={theme.COLORS.BRAND_MID} weight='fill' />

                  <TitleContentEventGeneric>
                    { eventData.locale }
                  </TitleContentEventGeneric>
                </LocaleEvent>

                <LocaleEvent>
                  <ClockIcon size={20} color={theme.COLORS.BRAND_MID} weight='fill' />

                  <TitleContentEventGeneric>
                    { eventData.hours }
                  </TitleContentEventGeneric>
                </LocaleEvent>

              </ContentEvent>
            </CardEvent>
          )
        })}
      </ContainerContentEvents>

      <MenuFooterBar btnActive='agenda' />
    </body>
  )
}