<script setup lang="ts">
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import Calendar from "primevue/calendar";
import Dropdown from 'primevue/dropdown';

const optionStatus = [
  {
    value: "Active",
  },
  {
    value: "Inactive",
  },
  {
    value: "Draft",
  },
  {
    value: "Expired",
  },
];
</script>

<template>
  <div class="create-campaign">
    <Button label="สร้างแคมเปญใหม่" class="p-button-warning" />
  </div>

  <div class="card">
    <h3>ค้นหา/ตรวจสอบแคมเปญทั้งหมด</h3>
    <div class="p-grid">
      <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0">
        <div class="p-field p-grid">
          <label for="firstname3" class="p-col-fixed" style="width: 200px"
            >ชื่อแคมเปญ</label
          >
          <div class="p-col">
            <InputText id="firstname3" type="text" style="width: 300px" />
          </div>
        </div>
      </div>
      <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0">
        <div class="p-field p-grid">
          <label for="lastname3" class="p-col-fixed" style="width: 200px"
            >สถานะ</label
          >
          <div class="p-col">
            <Dropdown :options="optionStatus" optionLabel="value" optionValue="value" placeholder="All" style="width: 300px" />
          </div>
        </div>
      </div>
      <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0">
        <div class="p-field p-grid">
          <label for="lastname3" class="p-col-fixed" style="width: 200px"
            >Campaign Code</label
          >
          <div class="p-col">
            <InputText id="lastname3" type="text" style="width: 300px" />
          </div>
        </div>
      </div>
      <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0">
        <div class="p-field p-grid">
          <label for="lastname3" class="p-col-fixed" style="width: 200px"
            >วันที่เริ่มแจกคูปอง</label
          >
          <div class="p-col">
            <Calendar id="icon" :showIcon="true" />
          </div>
        </div>
      </div>
      <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0">
        <div class="p-field p-grid">
          <label for="firstname3" class="p-col-fixed" style="width: 200px"
            >ชื่อร้านค้า</label
          >
          <div class="p-col">
            <InputText id="firstname3" type="text" style="width: 300px" />
          </div>
        </div>
      </div>
      <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0">
        <div class="p-field p-grid">
          <label for="lastname3" class="p-col-fixed" style="width: 200px"
            >วันสุดท้ายของการแจกคูปอง</label
          >
          <div class="p-col">
            <Calendar id="icon" :showIcon="true" />
          </div>
        </div>
      </div>
      <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0">
        <div class="p-field p-grid">
          <label for="lastname3" class="p-col-fixed" style="width: 200px"
            >สร้างโดย</label
          >
          <div class="p-col">
            <InputText id="lastname3" type="text" style="width: 300px" />
          </div>
        </div>
      </div>
    </div>

    <div class="p-d-flex p-jc-center">
      <Button label="Search" class="p-mr-2 p-mb-2" />
      <Button label="Clear" class="p-mr-2 p-mb-2 p-button-danger" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.create-campaign {
  position: absolute;
  top: 10px;
  right: 16px;
  margin-bottom: 25px;
}

.p-buttonset {
  .p-button {
    margin-right: 0;
  }
}

.sizes {
  .button {
    margin-bottom: 0.5rem;
    display: block;

    &:last-child {
      margin-bottom: 0;
    }
  }
}

@media screen and (max-width: 640px) {
  .p-button {
    margin-bottom: 0.5rem;

    &:not(.p-button-icon-only) {
      display: flex;
      width: 100%;
    }
  }

  .p-buttonset {
    .p-button {
      margin-bottom: 0;
    }
  }
}
</style>
