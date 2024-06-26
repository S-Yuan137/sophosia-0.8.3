<template>
  <q-toolbar class="q-px-none">
    <q-btn
      flat
      dense
      square
      icon="mdi-plus"
      size="0.8rem"
      padding="none"
      :ripple="false"
    >
      <q-tooltip>
        <i18n-t keypath="add">
          <template #type>{{ $t("project") }}</template>
        </i18n-t>
      </q-tooltip>
      <q-menu
        square
        class="menu"
      >
        <q-list dense>
          <q-item
            clickable
            v-close-popup
            @click="addEmpty"
          >
            <q-item-section>
              <i18n-t keypath="add">
                <template #type>{{ $t("project") }}</template>
              </i18n-t>
            </q-item-section>
          </q-item>
          <q-item
            clickable
            v-close-popup
            @click="addByID"
          >
            <q-item-section>
              <i18n-t keypath="create-entry-by">
                <template #type>{{ $t("identifier") }}</template>
              </i18n-t>
            </q-item-section>
          </q-item>
          <q-item
            clickable
            v-close-popup
            @click="addByFiles('file')"
          >
            <q-item-section>
              <i18n-t keypath="create-entry-by">
                <template #type>{{ $t("file") }}</template>
              </i18n-t>
            </q-item-section>
          </q-item>
          <q-separator />
          <q-item
            clickable
            v-close-popup
            @click="addByFiles('collection')"
          >
            <q-item-section>
              {{ $t("import-collection-bib-ris-etc") }}
            </q-item-section>
          </q-item>
        </q-list>
      </q-menu>
    </q-btn>

    <q-space />

    <q-input
      class="actionbar-input"
      outlined
      :placeholder="$t('search', { type: $t('local') })"
      v-model="searchText"
    >
      <template v-slot:append>
        <q-icon
          class="cursor-pointer"
          name="mdi-magnify"
        />
      </template>
    </q-input>

    <q-space />

    <q-btn
      flat
      dense
      square
      icon="mdi-format-list-bulleted"
      size="0.8rem"
      padding="none"
      :ripple="false"
      :color="layoutStore.libraryRightMenuSize > 0 ? 'primary' : ''"
      @click="layoutStore.toggleLibraryRightMenu()"
    >
      <q-tooltip>{{ $t("info") }}</q-tooltip>
    </q-btn>
  </q-toolbar>
</template>

<script setup lang="ts">
// types
import { open } from "@tauri-apps/api/dialog";
import { debounce } from "quasar";
import { useLayoutStore } from "src/stores/layoutStore";
import { computed } from "vue";

const layoutStore = useLayoutStore();

const props = defineProps({
  searchString: { type: String, required: true },
});
const emit = defineEmits([
  "update:searchString",
  "addEmptyProject",
  "addByFiles",
  "addByCollection",
  "showIdentifierDialog",
]);

const searchText = computed({
  get() {
    return props.searchString;
  },
  set: debounce((text: string) => {
    emit("update:searchString", text);
  }, 500),
});

/**
 * Opens a file dialog and adds projects based on the selected files.
 * Handles different types of file imports, including single files or collections.
 * @param {string} type - The type of file import ('file' or 'collection').
 */
async function addByFiles(type: string) {
  let filePath: string | string[] | null; //no type checking for now
  switch (type) {
    case "file":
      filePath = await open({
        multiple: true,
        filters: [{ name: "*.pdf", extensions: ["pdf"] }],
      });

      if (Array.isArray(filePath)) emit("addByFiles", filePath);
      else if (!filePath) return;
      else emit("addByFiles", [filePath]); // user selected a single file

      break;
    case "collection":
      filePath = await open({
        multiple: false,
        filters: [
          { name: "*.bib, *.ris, *.json", extensions: ["bib", "ris", "json"] },
        ],
      });
      if (!filePath) return;
      emit("addByCollection", filePath);
      break;
  }
}

/**
 * Emits an event to trigger the creation of an empty project.
 */
function addEmpty() {
  emit("addEmptyProject");
}

/**
 * Emits an event to show the dialog for adding a project by identifier.
 */
function addByID() {
  emit("showIdentifierDialog");
}
</script>
<stlye lang="scss" scoped>
//here to prevent conflict with general tabs selector in global scss file
.actionbar-input {
  .q-field__control {
    height: min(2rem, 36px);
  }
  .q-field__control-container {
    height: min(2rem, 36px);
  }
  .q-field__marginal {
    height: min(2rem, 36px);
  }
}
</stlye>
