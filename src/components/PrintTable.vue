<template>
  <div class="printtable">
    <table id="customers">
      <tr v-html="tableHeaderStr"></tr>
      <tr v-html="tableContentStr"></tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "PrintTable",
  props: ["tableHeader", "tableContent"],
  data() {
    return {
      tableHeaderStr: "",
      tableContentStr: "",
    };
  },
  mounted() {
    this.prepareTableHeader();
    this.prepareTableContent();
  },
  methods: {
    prepareTableHeader() {
      this.tableHeader.map((item) => {
        this.tableHeaderStr += `<th>${item}</th>`;
      });
    },
    prepareTableContent() {
      this.tableContent.map((item) => {
        item.map(content => {
          this.tableContentStr += `<td>${item}</td>`;
        })
      });
    },
  },
};
</script>

<style scoped>
#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#customers td,
#customers th {
  border: 1px solid #ddd;
  padding: 8px;
}

#customers tr:nth-child(even) {
  background-color: #f2f2f2;
}

#customers tr:hover {
  background-color: #ddd;
}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04aa6d;
  color: white;
}
</style>
