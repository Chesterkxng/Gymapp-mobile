import { FlatList } from "react-native";
import AppView from '@/components/layout/AppView'
import NavBack from '@/components/layout/NavBack'
import TabHeader from '@/components/layout/TabHeader'
import NotificationCard from '@/components/ui/NotificationCard'
import { notifications } from '@/data/notifications'
import { router } from "expo-router";


const index = () => {

  return (
    <AppView>

      <NavBack />

      <TabHeader
        title={"Notifications"}
        style={{ marginBottom: 32 }}
      />

      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 24, paddingHorizontal: 1 }}
        renderItem={({ item }) => (
          <NotificationCard
            title={item.title}
            type={item.type}
            gymName={item.gymName}
            message={item.message}
            createdAt={item.createdAt}
            unread={item.unread}
            onPress={() => router.push(`/notification/${item.id}`)}
          />
        )}
      />

    </AppView>
  )
}

export default index