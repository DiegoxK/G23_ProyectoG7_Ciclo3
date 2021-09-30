<template>
  <div class="container-fluid">
    <Header />

    <div class="p-5"></div>

    <div>
      <table
        v-if="check === 'true' && userType === 'admin'"
        class="table table-white"
      >
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Tipo de Casa</th>
            <th>Mascota?</th>
            <th>Castrada?</th>
            <th>Edad Mascota</th>
            <th>Tipo de Usuario</th>
            <th>Correo Electronico</th>
            <th>Telefono</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in users" :key="index">
            <td>{{ user.nombre }}</td>
            <td>{{ user.apellido }}</td>
            <td>{{ user.tipoDeCasa }}</td>
            <td>{{ user.mascota }}</td>
            <td>{{ user.castrada }}</td>
            <td>{{ user.edadMascota }}</td>
            <td>{{ user.userType }}</td>
            <td>{{ user.correoElectronico }}</td>
            <td>{{ user.telefono }}</td>
            <td>
              <button
                class="btn-warning btn-sm mx-2"
                @click="enableEdit(user._id)"
              >
                Edit
              </button>
              <button
                class="btn-danger btn-sm mx-2"
                @click="deleteUser(user._id)"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-if="edit == true">
      <form @submit.prevent="editUser(userEdit._id)">
        <h3 class="text-center">Edit User</h3>
        <input
          type="text"
          placeholder="Enter new user name"
          class="form-control my-2"
          v-model="userEdit.nombre"
        />
        <input
          type="text"
          placeholder="Enter new password"
          class="form-control my-2"
          v-model="userEdit.apellido"
        />
        <input
          type="text"
          placeholder="Enter new email"
          class="form-control my-2"
          v-model="userEdit.correoElectronico"
        />
        <input
          type="text"
          placeholder="Enter new phone number"
          class="form-control my-2"
          v-model="userEdit.telefono"
        />
        <button class="btn-sm btn-block mb-1 btn-warning" type="submit">
          Edit
        </button>
        <button class="btn-sm btn-danger " @click="disableEdit(user._id)">
          Cancel
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
export default {
  components: { Header },
  data() {
    return {
      edit: false,
      userEdit: {},
      users: [],
      check: Header.methods.readCookie("check"),
      userType: Header.methods.readCookie("userType"),
    };
  },
  created() {
    this.listCredentials();
  },
  methods: {
    listCredentials() {
      axios
        .get("http://localhost:3000/api/user")
        .then((response) => {
          console.log(response.data);
          this.users = response.data;
        })
        .catch((e) => {
          console.log("error" + e);
        });
    },
    enableEdit(id) {
      this.edit = true;
      axios
        .get(`http://localhost:3000/api/user/${id}`)
        .then((res) => {
          this.userEdit = res.data;
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
        .put(`http://localhost:3000/api/user/${id}`, this.userEdit)
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
        .delete(`http://localhost:3000/api/user/${id}`)
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
