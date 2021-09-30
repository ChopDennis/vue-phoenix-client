<template>
  <div>
    <div class="flex items-center justify-center h-screen">
      <div
        class="hidden sm:block w-1/2 bg-cover h-screen"
        style='background: url(newFood.png)'
      >
        <div class="bg-blue-800 w-full h-screen bg-opacity-20">
        </div>
      </div>
      <div class="sm:w-1/2">
        <div class="p-5 w-4/5 mx-auto text-left font-raleway">
          <div class="text-left mb-7">
            <router-link to="/">
              <font-awesome-icon
                class="mr-5"
                :icon="['fas', 'arrow-left']"
              /> HOME
            </router-link>
          </div>
          <h1 class="font-bold text-left font-montserrat text-4xl sm:text-6xl mb-7">
            Sign Up. To. Join Recipee
          </h1>
          <p
            v-show="error"
            class="text-sm text-red-500"
          >{{ errorMsg }}</p>
          <p
            v-show="confirm"
            class="text-sm text-green-500"
          >{{ confirmMsg }}</p>
          <form @submit="requestRegister">
            <div class="my-4">
              <h1 class="text-left font-bold mb-2 font-montserrat">Name</h1>
              <input
                type="text"
                v-model="register.name"
                class="text-sm outline-none pb-2 w-4/5 bg-transparent border-b hover:border-blue-700 focus:border-blue-700"
              >
            </div>
            <div class="my-4">
              <h1 class="text-left font-bold mb-2 font-montserrat">Email</h1>
              <input
                type="email"
                v-model="register.email"
                class="text-sm outline-none pb-2 w-4/5 bg-transparent border-b hover:border-blue-700 focus:border-blue-700"
              >
            </div>
            <div class="my-4">
              <h1 class="text-left font-bold mb-2 font-montserrat">Password</h1>
              <input
                type="password"
                v-model="register.password"
                class="text-sm outline-none pb-2 w-4/5 bg-transparent border-b hover:border-blue-700 focus:border-blue-700"
              >
            </div>
            <div class="my-4">
              <h1 class="text-left font-bold mb-2 font-montserrat">Username</h1>
              <input
                type="text"
                v-model="register.username"
                class="text-sm outline-none pb-2 w-4/5 bg-transparent border-b hover:border-blue-700 focus:border-blue-700"
              >
            </div>

            <button
              type="submit"
              :disabled="register.name.length < 6 || register.password.length < 6 || register.username.length < 3"
              class="bg-green-400 p-5 text-white"
            >
              登入
              <font-awesome-icon
                class="ml-3"
                :icon="['fas', 'arrow-right']"
              />
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
    <script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Register',
  data() {
    return {
      register: {
        name: 'ShrekHuang',
        email: 'shrekhuang2186@gmail.com',
        password: '1qaz@WSX',
        username: 'Shrek2186',
      },
      error: false,
      errorMsg: `An Error occurred, please try again`,
      confirmMsg: `Please check your email.`,
      confirm: false,
    }
  },
  computed: {
    ...mapGetters(['_getAuthUser']),
  },
  mounted() {
    this.confirm = !this._getAuthUser.confirm
  },
  methods: {
    ...mapActions(['a_registerAuth']),
    requestRegister(e) {
      e.preventDefault()
      this.a_registerAuth(this.register).catch((error) => {
        console.error(error)
        this.error = true
      })
    },
  },
}
</script>
    <style scoped>
</style>