<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-tabs inline-label>
          <q-route-tab name="requests" label="Заявки" to="/request" />
          <q-route-tab name="accounts" label="Счета" to="/account" />
          <q-route-tab
            v-for="tab in reqStore.tabs"
            :key="tab.id"
            :label="tab.label"
            :to="`/request/${tab.id}`"
          >
            <q-btn
              flat
              dense
              round
              icon="close"
              class="q-ml-xs"
              @click.prevent="closeTab(tab.id)"
            />
          </q-route-tab>
        </q-tabs>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view :key="route.params.id" />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { useRequestStore } from "src/stores/requests";
import { useRouter, useRoute } from "vue-router";
import { LocalStorage } from "quasar";
import { watch } from "vue";

const reqStore = useRequestStore();

defineOptions({
  name: "MainLayout",
});

// Используем useRoute для получения текущего маршрута
const route = useRoute();
const router = useRouter();

// Отслеживаем изменения в текущем маршруте
watch(
  () => route.name,
  (newName) => {
    if (newName === "ReqDetails") {
      const idRouter = route.params.id;

      let row =
        reqStore.rows.find((row) => row.id == idRouter) ||
        reqStore.getId(idRouter);

      // Проверяем, если вкладка уже существует, не добавляем её
      if (!row || !reqStore.tabIsOpen(row.id)) {
        reqStore.addTab({
          id: idRouter,
          label: `Заявка...`,
          num: idRouter,
        });
      }
    }
  },
  { immediate: true }
);

// Закрытие таба
const closeTab = (id) => {
  reqStore.removeTab(id); // Удаляем вкладку из store

  if (route.path !== "/request") {
    router.push("/request").catch((err) => {
      console.error("Ошибка навигации:", err);
    });
  }
  LocalStorage.setItem("tabs", reqStore.tabs);
};
</script>
