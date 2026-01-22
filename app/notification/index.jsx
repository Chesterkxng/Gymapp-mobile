import AppView from '@/components/layout/AppView'
import NavBack from '@/components/layout/NavBack'
import TabHeader from '@/components/layout/TabHeader'
import NotificationCard from '@/components/ui/NotificationCard'


const index = () => {
  return (
    <AppView>
      
      <NavBack />

    <TabHeader 
        title={"Notifications"}
        style={{marginBottom: 32}}
    />

    <NotificationCard
      title={"Rappel d'abonnement"}
      type={"reminder"}
      gymName={"FITZONE"}
      message={"Votre abonnement expire le 15 février 2026"}
      time={"Il y'a 2 heures"}
      unread
     />

     <NotificationCard
      title={"Joyeux anniversaire"}
      type={"birthday"}
      message={"X vous souhaite un joyeux anniversaire. Meilleurs Voeux!"}
      time={"Il y'a 5 jours"}
      unread
     />

        
    </AppView>
  )
}

export default index