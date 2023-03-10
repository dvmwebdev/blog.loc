<template>
  <div class="ui grid sticky-container">
    <div
      class="sixteen wide mobile sixteen wide tablet four wide computer column sticky-column"
    >
      <div class="ui segment sylius-tree">
        <BMenu></BMenu>
      </div>
    </div>
    <div
      class="sixteen wide mobile sixteen wide tablet twelve wide computer column"
    >
      <div class="ui stackable two column grid">
        <div class="column">
          <h1 class="ui header">
            <i class="circular plus icon"></i>
            <div class="content">Створення категорії (підкатегорії)</div>
          </h1>

          <div class="ui breadcrumb">
            <NuxtLink to="/admin" class="section">Адмін панель</NuxtLink>
            <i class="right chevron icon divider"></i>
            <div class="active section">Новий</div>
          </div>
        </div>
        <div class="middle aligned column"></div>
      </div>

      <div class="ui segment">
        <form
          name="sylius_taxon"
          method="post"
          action="/admin/taxons/new"
          class="ui loadable form dirtylisten"
          novalidate="novalidate"
          enctype="multipart/form-data"
        >
          <div class="ui segment">
            <div class="two fields">
              <div class="required field">
                <label for="sylius_taxon_code" class="required">Код</label
                ><input
                  type="text"
                  id="sylius_taxon_code"
                  name="sylius_taxon[code]"
                  required="required"
                />
              </div>
              <div class="field">
                <label for="sylius_taxon_parent">Батьківський об'єкт</label>
                <div
                  class="sylius-autocomplete ui fluid search selection dropdown"
                  data-url="/admin/ajax/taxons/search"
                  data-choice-name="fullname"
                  data-choice-value="code"
                  data-criteria-type="contains"
                  data-criteria-name="phrase"
                  data-load-edit-url="/admin/ajax/taxons/leaf"
                >
                  <input
                    type="hidden"
                    id="sylius_taxon_parent"
                    name="sylius_taxon[parent]"
                    class="autocomplete"
                  /><i class="dropdown icon"></i>
                  <input class="search" autocomplete="off" tabindex="0" />
                  <div class="default text"></div>
                  <div class="menu" tabindex="-1"></div>
                </div>
              </div>
            </div>
            <div class="fields">
              <div class="field">
                <div class="ui toggle checkbox">
                  <input
                    type="checkbox"
                    id="sylius_taxon_enabled"
                    name="sylius_taxon[enabled]"
                    value="1"
                    checked="checked"
                    tabindex="0"
                    class="hidden"
                  /><label for="sylius_taxon_enabled">Ввімкнено</label>
                </div>
              </div>
            </div>
          </div>
          <div class="ui hidden divider"></div>
          <div class="ui buttons">
            <button class="ui labeled icon primary button" type="submit">
              <i class="plus icon"></i>Створити
            </button>
            <a href="/admin/taxons/" class="ui button"> Скасувати </a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import BMenu from "@/components/menu/BMenu.vue";

export default {
  name: "index",
  components: { BMenu },
  layout: "admin",
};
</script>

<style scoped lang="scss"></style>