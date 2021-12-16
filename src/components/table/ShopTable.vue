<script setup lang="ts">
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';

// const cars = [
//     { "brand": "Volkswag.en", "year": 2012, "color": "Orange", "vin": "dsad231ff" },
//     { "brand": "Audi", "year": 2011, "color": "Black", "vin": "gwregre345" },
//     { "brand": "Renault", "year": 2005, "color": "Gray", "vin": "h354htr" },
//     { "brand": "BMW", "year": 2003, "color": "Blue", "vin": "j6w54qgh" },
//     { "brand": "Mercedes", "year": 1995, "color": "Orange", "vin": "hrtwy34" },
//     { "brand": "Volvo", "year": 2005, "color": "Black", "vin": "jejtyj" },
//     { "brand": "Honda", "year": 2012, "color": "Yellow", "vin": "g43gr" },
//     { "brand": "Jaguar", "year": 2013, "color": "Orange", "vin": "greg34" },
//     { "brand": "Ford", "year": 2000, "color": "Black", "vin": "h54hw5" },
//     { "brand": "Fiat", "year": 2013, "color": "Red", "vin": "245t2s" }
// ]

const campaign = [
    { "campaignCode": "12345", "campaignName": "Hello", "startDate": "", "endDate": "", "remaining" : "", "shopName": "Maya", "status": "Active", "live": true, "createDate": "", "priority": "hight" }
]

</script>

<template>
    <DataTable :value="campaign">
        <Column field="" header="No."></Column>
        <Column field="campaignCode" header="Campaign Code"></Column>
        <Column field="campaignName" header="ชื่อแคมเปญ"></Column>
        <Column field="startDate" header="คูปองเริ่มแจก"></Column>
        <Column field="endDate" header="แจกถึงวัน"></Column>
        <Column field="remaining" header="Remaining/Total"></Column>
        <Column field="shopName" header="ร้านค้า"></Column>
        <Column field="status" header="สถานะ"></Column>
        <Column field="live" header="live"></Column>
        <Column field="createDate" header="สร้างเมื่อ"></Column>
        <Column field="priority" header="Priority"></Column>
        <Column header="View/Edit"></Column>

    </DataTable>
</template>

<style scoped>
</style>