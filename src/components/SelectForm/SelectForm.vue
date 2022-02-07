<template>
  <div class="v-form-select">
    <input
      class="v-form-select__input"
      :type="typeText ? 'text' : 'button'"
      :value="setValue"
      :placeholder="placeholder"
      spellcheck="false"
      @click="dropList()"
      @input="changeText($event.target.value)"
    />
    <span class="select-focus"></span>
    <ul ref="list" x-placement="bottom-start" v-click-outside="outList">
      <li
        v-for="option in selectOptions"
        :key="option.id"
        :value="option.id"
        @click="selectOption($event)"
      >
        {{ option.data }}
      </li>
    </ul>
  </div>
</template>
<script>
import Vue from 'vue';
import './SelectForm.scss'

export default Vue.extend({
  name: "select-form",
  props: {
    value: null,
    options: { type: Array, default: () => [] },
    typeText: { type: Boolean, default: false },
    valueField: { type: String, default: "" },
    textField: { type: String, default: "" },
    placeholder: { type: String, default: "" },
  },
  data() {
    return {
      displayTimes: 1,
      selectOptionsAll: [],
      selectOptions: [],
      selectPlaceholder: this.typeText ? "" : this.placeholder,
      selectValue: this.value,
    };
  },
  methods: {
    dropList() {
      this.displayTimes = 0;
      this.$refs.list.style.display = "block";
    },
    outList: function () {
      if (this.$refs.list.style.display == "none") return;
      this.displayTimes++;
      if (this.displayTimes == 2) this.$refs.list.style.display = "none";
    },
    setOptions() {
      this.selectOptions = [];
      this.options?.forEach((option) => {
        this.selectOptions.push({
          id: option[this.valueField] ?? option,
          data: option[this.textField] ?? option,
        });
      });
      this.selectOptionsAll = this.selectOptions;
    },
    selectOption(event) {
      this.setSelected(event.target.getAttribute("value"));
      this.$emit("input", this.selectValue.id);
      this.$refs.list.style.display = "none";
    },
    setSelected(id) {
      this.selectValue = this.selectOptionsAll.find(
        (option) => id == option.id
      );
    },
    changeText(value) {
      this.selectValue = value;
      this.selectOptions = this.selectOptionsAll?.filter((option) => {
        if (
          option.id.toLowerCase().includes(value.toLowerCase()) ||
          option.data.toLowerCase().includes(value.toLowerCase())
        )
          return option;
      });
      this.dropList();
    },
  },
  mounted() {
    this.setOptions();
    if (this.value) this.setSelected(this.value);
  },
  computed: {
    setValue() {
      if (this.typeText) return this.selectValue?.data ?? this.selectValue;

      return this.selectValue?.data ?? this.selectPlaceholder;
    },
  },
  watch: {
    value() {
      if (!this.typeText) this.setSelected(this.value);
    },
  },
});
</script>
