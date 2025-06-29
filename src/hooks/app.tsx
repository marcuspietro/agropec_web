import React, { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from 'react';
import { apiClient } from '../services/api';
import type { ICategory, IEventSchedule } from '../database/agenda';
import type { PointsMap } from '../database/expositores';

interface PropsAuthContextProvider {
  children: ReactNode;
}

export interface IPosts {
  id: string;
  description: string;
  type_media: string;
  media: string;
  created_at: string;
}

export interface INotification {
  id: string,
  title: string,
  description: string,
  created_at: string
}

interface ResponseFetchEvents {
  eventsAll: IEventSchedule[],
  categories: ICategory[]
}

interface AuthContextData {
  // signIn(credentials: PropsSignIn): Promise<void>;
  posts: IPosts[];
  loadingCore: boolean;
  
  notifications: INotification[];
  fetchNotifications(): void;
  
  eventsAll: IEventSchedule[];
  fetchEventsAll(): Promise<ResponseFetchEvents>;

  allCategoriesExpositores: ICategory[];
  allExpositores: PointsMap[];
}


const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AppProviderContext: React.FC<PropsAuthContextProvider> = ({children}) => {

  const [loadingCore, setLoadingCore] = useState(false);

  const [allCategoriesExpositores, setAllCategoriesExpositores] = useState<ICategory[]>([]);
  const [allExpositores, setAllExpositores] = useState<PointsMap[]>([]);

  const [eventsAll, setEventsAll] = useState<IEventSchedule[]>([]);
  const [categories, setCategories] = useState<ICategory[]>([]);

  const fetchEventsAll = useCallback(async () => { 
    
    if(eventsAll.length > 0) return {
      eventsAll,
      categories
    };

    setLoadingCore(true);

    try {

      const { data: dataCategories } = await apiClient.get("/events/categories");
      const { data } = await apiClient.get("/events/all");

      setCategories(dataCategories);
      setEventsAll(data);

      return {
        eventsAll: data,
        categories: dataCategories
      }

    } catch(err) {

      return {
        eventsAll: [],
        categories: []
      }

    } finally {
      setLoadingCore(false);
    }

  }, [eventsAll]);


  const [notifications, setNotifications] = useState<INotification[]>([]);

  const fetchNotifications = useCallback(() => { 
    
    if(notifications.length > 0) return;

    setLoadingCore(true);

    apiClient.get("/notifications/all")
    .then(({ data }) => {
      setNotifications(data);

      console.log(data);
    })
    .finally(() => {
      setLoadingCore(false);
    })

  }, [notifications]);


  const [posts, setPosts] = useState<IPosts[]>([]);

  useEffect(() => {

    setLoadingCore(true);

    apiClient.get("/posts")
    .then(({ data }) => {
      setPosts(data.posts);
    })
    .finally(() => {
      setLoadingCore(false);
    });

    apiClient.get("/estandes/categories")
    .then(({ data }) => {
      setAllCategoriesExpositores(data);
    })
    .catch(() => setAllCategoriesExpositores([]));

    apiClient.get("/estandes/all")
    .then(({ data }) => {
      setAllExpositores(data);
    })
    .catch(() => setAllExpositores([]));

  }, []);

  return (
    <AuthContext.Provider
      value={{
        posts, loadingCore,
        notifications, fetchNotifications,
        eventsAll, fetchEventsAll,
        allCategoriesExpositores, allExpositores
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useApp(): AuthContextData {
  const context = useContext(AuthContext);

  if(!context) {
    throw new Error('Erro na autenticação!');
  }

  return context;
}

export { AppProviderContext, useApp };