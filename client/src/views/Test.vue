<template>
  <div>
    <h1>Sign Up</h1>
    <hr />
    <form @submit.prevent="submitForm">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">User Name</label>
        <input
          type="text"
          placeholder="User Name"
          v-model="register.userName"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        <div id="emailHelp" class="form-text text-light">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input
          type="password"
          placeholder="Password"
          v-model="register.password"
          class="form-control"
          id="exampleInputPassword1"
        />
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      register: {
        userName: "",
        password: "",
      },
    };
  },

  methods: {
    submitForm() {
      axios
        .post("http://localhost:3000/api/user-admin", this.register)
        .then((res) => {
          console.log(res.data.message);
        })
        .catch((e) => {
          console.log(e.response.data.message);
        });

      this.register.userName = "";
      this.register.password = "";
    },
  },
};
</script>
