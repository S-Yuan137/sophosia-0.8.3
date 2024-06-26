<template>
  <q-card
    flat
    bordered
    square
    class="card q-mb-sm row items-center justify-between"
  >
    <q-card-section class="q-py-none">
      <div class="text-subtitle1 text-bold">
        {{ meta.name }}
        <q-icon
          name="mdi-star"
          class="q-ml-md"
        />
        {{ star }}
      </div>
      <div>{{ meta.author }}</div>
      <div>{{ $t("version", [meta.version]) }}</div>
      <div class="q-mb-xs">{{ meta.description }}</div>
    </q-card-section>
    <q-card-actions v-if="status !== undefined">
      <q-btn
        flat
        dense
        square
        no-caps
        size="0.7rem"
        padding="xs"
        :ripple="false"
        icon="mdi-cog-outline"
        @click="openSettingPage(meta)"
      >
        <q-tooltip>{{ $t("settings") }}</q-tooltip>
      </q-btn>
      <q-btn
        flat
        dense
        square
        no-caps
        size="0.7rem"
        padding="xs"
        :ripple="false"
        icon="mdi-arrow-up"
        @click="$emit('install')"
      >
        <q-tooltip>{{ $t("update") }}</q-tooltip>
      </q-btn>
      <q-btn
        flat
        dense
        square
        no-caps
        size="0.7rem"
        padding="xs"
        :ripple="false"
        icon="mdi-trash-can-outline"
        @click="$emit('uninstall')"
      >
        <q-tooltip>{{ $t("delete") }}</q-tooltip>
      </q-btn>
      <q-toggle
        v-model="enabled"
        color="primary"
        size="2.2rem"
      >
        <q-tooltip>{{ enabled ? $t("enable") : $t("disable") }}</q-tooltip>
      </q-toggle>
    </q-card-actions>
    <q-card-actions v-else>
      <q-btn
        dense
        unelevated
        square
        no-caps
        size="0.8rem"
        color="primary"
        :ripple="false"
        :disable="disableInstall"
        @click="
          $emit('install');
          disableInstall = true;
        "
      >
        {{ !disableInstall ? $t("install") : $t("installing") }}
      </q-btn>
    </q-card-actions>
  </q-card>
</template>
<script setup lang="ts">
import { PluginMeta, PluginStatus } from "src/backend/database";
import { useStateStore } from "src/stores/stateStore";
import { PropType, computed, onMounted, ref, watch } from "vue";
const stateStore = useStateStore();

const props = defineProps({
  meta: { type: Object as PropType<PluginMeta>, required: true },
  status: { type: Object as PropType<PluginStatus>, required: false },
});
const emit = defineEmits(["toggle", "install", "uninstall"]);
const star = ref<number | null>(null);
const disableInstall = ref(!!props.status);
const enabled = computed({
  get() {
    return !!props.status?.enabled;
  },
  set(value: boolean) {
    emit("toggle", value);
  },
});

watch(
  () => props.status,
  (status: PluginStatus | undefined) => {
    disableInstall.value = !!status ? true : false;
  }
);

function openSettingPage(meta: PluginMeta) {
  let id = meta.id;
  let label = `${meta.name} Settings`;
  let type = "PluginSettingsPage";
  setTimeout(() => {
    // need to wait abit, otherwise can't focus on the new page
    stateStore.openPage({ id, type, label });
  }, 100);
}

onMounted(async () => {
  // get star
  try {
    let response = await fetch(
      `https://api.github.com/repos/${props.meta.repo}`
    );
    let data = await response.json();
    star.value = data.stargazers_count;
  } catch (error) {
    star.value = null;
  }
});
</script>
<style scoped>
.card {
  background: var(--color-settings-card-bkgd);
}
</style>
