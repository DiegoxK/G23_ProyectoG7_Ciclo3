<template>
  <div class="container-fluid">
    <table class="table table-dark">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">UserName</th>
          <th scope="col">Password</th>
          <th scope="col">State</th>
          <th scope="col">Options</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(admin, index) in admins" :key="index">
          <th scope="row">{{ admin._id }}</th>
          <td>{{ admin.userName }}</td>
          <td>{{ admin.password }}</td>
          <td>{{ admin.logged }}</td>
          <td>
            <button
              class="btn-warning btn-sm mx-2"
              @click="enableEdit(admin._id)"
            >
              Edit
            </button>
            <button
              class="btn-danger btn-sm mx-2"
              @click="deleteUser(admin._id)"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-if="edit == false">
      Hello there
    </div>
    <div v-else>
      <form @submit.prevent="editUser(adminEdit._id)">
        <h3 class="text-center">Edit User</h3>
        <input
          type="text"
          placeholder="Enter new user name"
          class="form-control my-2"
          v-model="adminEdit.userName"
        />
        <input
          type="text"
          placeholder="Enter new password"
          class="form-control my-2"
          v-model="adminEdit.password"
        />
        <button class="btn-sm btn-block mb-1 btn-warning" type="submit">
          Edit
        </button>
        <button class="btn-sm btn-danger " @click="disableEdit(admin._id)">
          Cancel
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      edit: false,
      adminEdit: {},
      admins: [],
    };
  },
  created() {
    this.listCredentials();
  },
  methods: {
    listCredentials() {
      axios
        .get("http://localhost:3000/api/user-admin")
        .then((response) => {
          console.log(response.data);
          this.admins = response.data;
        })
        .catch((e) => {
          console.log("error" + e);
        });
    },
    enableEdit(id) {
      this.edit = true;
      axios
        .get(`http://localhost:3000/api/user-admin/${id}`)
        .then((res) => {
          this.adminEdit = res.data;
        })
        .catch((e) => {
          console.log(e.response);
        });
    },
    disableEdit() {
      this.edit = false;
    },

    editUser(id) {
      axios
        .put(`http://localhost:3000/api/user-admin/${id}`, this.adminEdit)
        .then((res) => {
          this.listCredentials();
          this.edit = false;
        })
        .catch((e) => {
          console.log(e.response);
        });
    },
    deleteUser(id) {
      axios
        .delete(`http://localhost:3000/api/user-admin/${id}`)
        .then((res) => {
          this.listCredentials();
        })
        .catch((e) => {
          console.log(e.response);
        });
    },
  },
};
</script>
