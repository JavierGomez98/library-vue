<template>
  <div class="shadow-light-100" style="margin: 10px;background: #fff;padding: 10px;border-radius: 5px;">
    <section>
      <h1>Colors</h1>
      <h3>Primary Brand</h3>
      <div class="flex">
        <div class="neutral-00" style="width: 180px; border-radius: 4px">
          <div class="bg-primary" style="min-height: 63px; padding: 5px">
            <h5>primary</h5>
          </div>
          <div class="flex">
            <span
              class="bg-primary-80"
              style="min-height: 8px; width: -webkit-fill-available"
            ></span>
            <span
              class="bg-primary-60"
              style="min-height: 8px; width: -webkit-fill-available"
            ></span>
            <span
              class="bg-primary-20"
              style="min-height: 8px; width: -webkit-fill-available"
            ></span>
            <span
              class="bg-primary-15"
              style="min-height: 8px; width: -webkit-fill-available"
            ></span>
          </div>
        </div>
        <div class="neutral-00" style="width: 180px; border-radius: 4px">
          <div class="bg-secondary" style="min-height: 63px; padding: 5px">
            <h5>secondary</h5>
          </div>
          <div class="flex">
            <span
              class="bg-secondary-80"
              style="min-height: 8px; width: -webkit-fill-available"
            ></span>
            <span
              class="bg-secondary-60"
              style="min-height: 8px; width: -webkit-fill-available"
            ></span>
          </div>
        </div>
        <div class="neutral-00" style="width: 180px; border-radius: 4px">
          <div class="bg-primary-dark" style="min-height: 63px; padding: 5px">
            <h5>primary-dark</h5>
          </div>
          <div class="flex">
            <span
              class="bg-primary-dark-80"
              style="min-height: 8px; width: -webkit-fill-available"
            ></span>
            <span
              class="bg-primary-dark-60"
              style="min-height: 8px; width: -webkit-fill-available"
            ></span>
            <span
              class="bg-primary-dark-15"
              style="min-height: 8px; width: -webkit-fill-available"
            ></span>
          </div>
        </div>
      </div>

      <h3 class="mtp-12">States</h3>
      <div class="flex">
        <div class="neutral-00" style="width: 180px; border-radius: 4px">
          <div class="bg-success" style="min-height: 63px; padding: 5px">
            <h5>success</h5>
          </div>
          <div class="flex">
            <span
              class="bg-success-80"
              style="min-height: 8px; width: -webkit-fill-available"
            ></span>
            <span
              class="bg-success-60"
              style="min-height: 8px; width: -webkit-fill-available"
            ></span>
          </div>
        </div>
        <div class="neutral-00" style="width: 180px; border-radius: 4px">
          <div class="bg-info" style="min-height: 63px; padding: 5px">
            <h5>info</h5>
          </div>
          <div class="flex">
            <span
              class="bg-info-80"
              style="min-height: 8px; width: -webkit-fill-available"
            ></span>
            <span
              class="bg-info-60"
              style="min-height: 8px; width: -webkit-fill-available"
            ></span>
            <span
              class="bg-info-15"
              style="min-height: 8px; width: -webkit-fill-available"
            ></span>
          </div>
        </div>
        <div class="neutral-100" style="width: 180px; border-radius: 4px">
          <div class="bg-warning" style="min-height: 63px; padding: 5px">
            <h5>warning</h5>
          </div>
          <div class="flex">
            <span
              class="bg-warning-80"
              style="min-height: 8px; width: -webkit-fill-available"
            ></span>
            <span
              class="bg-warning-60"
              style="min-height: 8px; width: -webkit-fill-available"
            ></span>
            <span
              class="bg-warning-15"
              style="min-height: 8px; width: -webkit-fill-available"
            ></span>
          </div>
        </div>
        <div class="neutral-00" style="width: 180px; border-radius: 4px">
          <div class="bg-error" style="min-height: 63px; padding: 5px">
            <h5>error</h5>
          </div>
          <div class="flex">
            <span
              class="bg-error-80"
              style="min-height: 8px; width: -webkit-fill-available"
            ></span>
            <span
              class="bg-error-60"
              style="min-height: 8px; width: -webkit-fill-available"
            ></span>
            <span
              class="bg-error-15"
              style="min-height: 8px; width: -webkit-fill-available"
            ></span>
          </div>
        </div>
      </div>
    </section>

    <section class="flex mtp-12">
      <div style="margin-right: 15px">
        <h1>H1</h1>
        <h2>H2</h2>
        <h3>H3</h3>
        <h4>H4</h4>
        <h5>H5</h5>
        <h6>H6</h6>
      </div>
      <div style="width: 400px">
        <span class="subtitle">subtitle</span>
        <p>
          Lorem ipsum dolor sit amet,
          <span class="highlight-paragraph">consectetur adipiscing elit.</span>
          <a href="#">Etiam eget</a> <small>elementum quam</small>, fermentum
          rutrum eros tincidunt in. Etiam maximus, odio ac gravida scelerisque,
          lacus velit lobortis massa, vitae gravida sem neque vel enim. Integer
          ipsum lacus, porta vel dolor quis, gravida commodo libero. In ut justo
          nisi. Quisque sodales tempus semper. Duis finibus tristique maximus.
          Etiam molestie diam nec ligula dignissim lobortis. Aliquam erat
          volutpat. Donec efficitur urna at lacus sagittis, ac accumsan erat
          commodo.
        </p>
      </div>
    </section>

    <section class="section-btn mtp-12">
      <h1>Buttons</h1>
      <div class="grid">
        <button class="button button-primary">Active</button>
        <button class="button button-primary" disabled>Active</button>
        <button class="button button-primary button-sm">
          Active <i class="fas fa-upload" style="margin-left: 10px"></i>
        </button>
        <button class="button button-primary button-sm" disabled>
          Active <i class="fas fa-upload" style="margin-left: 10px"></i>
        </button>
      </div>
      <div class="grid">
        <button class="button button-secondary">Active</button>
        <button class="button button-secondary" disabled>Active</button>
        <button class="button button-secondary button-sm">
          Active <i class="fas fa-upload" style="margin-left: 10px"></i>
        </button>
        <button class="button button-secondary button-sm" disabled>
          Active <i class="fas fa-upload" style="margin-left: 10px"></i>
        </button>
      </div>
      <div class="grid">
        <button class="button button-negative">Active</button>
        <button class="button button-negative" disabled>Active</button>
        <button class="button button-negative button-sm">
          Active <i class="fas fa-upload" style="margin-left: 10px"></i>
        </button>
        <button class="button button-negative button-sm" disabled>
          Active <i class="fas fa-upload" style="margin-left: 10px"></i>
        </button>
      </div>
      <div class="grid">
        <button class="button button-outline">
          <span><i class="fas fa-file-upload"></i>Active</span>
        </button>
        <button class="button button-outline" disabled>
          <span><i class="fas fa-file-upload"></i>Active</span>
        </button>
        <button class="button button-outline button-sm">
          <span><i class="fas fa-file-upload"></i>Active</span>
        </button>
        <button class="button button-outline button-sm" disabled>
          <span><i class="fas fa-file-upload"></i>Active</span>
        </button>
      </div>
    </section>

    <section class="mtp-12">
      <h1>Inputs</h1>
      <h3>Select <small>vanilla</small></h3>
      <div class="form-select" style="width: 339px">
        <select name="select">
          <option value="value1">Select item</option>
          <option value="value2">Value 2</option>
          <option value="value3">Value 3</option>
        </select>
        <span class="select-focus"></span>
      </div>
      <h3 class="mtp-12">Checkbox - Radiobuttons <small>vanilla</small></h3>
      <div class="flex">
        <label class="form-checkbox mrp-12">
          Hi
          <input type="checkbox" />
          <span class="checkmark"></span>
        </label>
        <label class="form-checkbox">
          <input type="checkbox" checked disabled />
          <span>Hi</span>
          <span class="checkmark"></span>
        </label>
      </div>
      <div class="flex">
        <label class="form-radio mrp-12">
          Hi
          <input type="radio" name="radiesito" />
          <span class="checkmark"></span>
        </label>
        <label class="form-radio">
          <input type="radio" name="radiesito" checked disabled />
          <span>Hi</span>
          <span class="checkmark"></span>
        </label>
      </div>
    </section>
    <section class="mtp-12">
      <h1>Vue Components</h1>
      <h3>Select <small>select-form</small></h3>
      <div class="flex">
        <div class="mrp-12" style="width: 339px">
          <small>type-text="true"</small>
          <select-form
            v-model="selectValue"
            :options="selectOptions"
            value-field="code"
            text-field="name"
            :type-text="true"
            placeholder="Select Item"
          />
        </div>
        <div style="width: 339px">
          <small>type-text="false"</small>
          <select-form
            v-model="selectValueB"
            :options="['Afghanistan', 'Albania', 'Algeria']"
            placeholder="Select Item"
          />
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "Demo",
  data() {
    return {
      selectValue: "",
      selectValueB: "Albania",
      selectOptions: [
        { name: "Afghanistan", code: "AF" },
        { name: "Åland Islands", code: "AX" },
        { name: "Albania", code: "AL" },
        { name: "Algeria", code: "DZ" },
        { name: "American Samoa", code: "AS" },
        { name: "Andorra", code: "AD" },
        { name: "Angola", code: "AO" },
        { name: "Anguilla", code: "AI" },
        { name: "Antarctica", code: "AQ" },
        { name: "Antigua and Barbuda", code: "AG" },
        { name: "Argentina", code: "AR" },
        { name: "Armenia", code: "AM" },
        { name: "Aruba", code: "AW" },
      ],
    };
  },
};
</script>
<style>
.section-btn .button {
  min-width: 166px;
}
.section-btn .button-sm {
  min-width: 123px;
}
.section-btn .button-outline {
  width: auto;
}
.section-btn .grid {
  display: grid;
  grid-template-columns: repeat(4, 0fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(50px, auto);
  align-items: center;
}
</style>