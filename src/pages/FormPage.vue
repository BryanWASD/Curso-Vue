<script setup lang="ts">
import { reactive } from 'vue';

interface Form {
    username: string;
    password: string;
    hobbies: string[];
    gender: string[];
}

const form = reactive<Form>({
    username: '',
    password: '',
    hobbies: [],
    gender: [],
})

const fun = reactive<string[]>([]);


const login = () => {
    fun.splice(0, fun.length);

    for (const item in form) {
    const key = item as keyof Form;
    if (form[key] === '' || (Array.isArray(form[key]) && form[key].length === 0)) {
      fun.push(item);
    }
  }
  if (fun.length === 0){
    alert('Information has been submitted');
  }
    console.table({form, fun});
};

</script>
<template>
    <div>
        <h1>Simple form</h1>
        <form @submit.prevent="login">
        <label for="">Username</label>&nbsp;
        <input type="text" name="" id="" placeholder="username" v-model="form.username" />
        <br>
        <br>
        <label for="">Password</label>&nbsp;
        <input type="password" name="" id="" placeholder="****" v-model="form.password" />
        <br>
        <br>
        <label for="">Hobbies:</label>&nbsp;
        <label for="">Hockey</label>&nbsp;
        <input type="checkbox" name="" id="" value="Hockey" placeholder="" v-model="form.hobbies" />&nbsp;
        <label for="">Padel</label>&nbsp;
        <input type="checkbox" name="" id="" value="Padel" placeholder="" v-model="form.hobbies" />&nbsp;
        <label for="">Football</label>&nbsp;
        <input type="checkbox" name="" id="" value="Football" placeholder="" v-model="form.hobbies" />&nbsp;
        <br>
        <br>
        <label for="">Gender:</label>&nbsp;
        <label for="">Male</label>&nbsp;
        <input type="radio" name="gender" id="" value="Male" placeholder="" v-model="form.gender" />&nbsp;
        <label for="">Female</label>&nbsp;
        <input type="radio" name="gender" id="" value="Female" placeholder="" v-model="form.gender" />&nbsp;
        <label for="">Prefer not to respond</label>&nbsp;
        <input type="radio" name="gender" id="" value="PNTR" placeholder="" v-model="form.gender" />&nbsp;
        <br>
        <br>
        <button type="submit">Sign up</button>
        </form>
        <ul>
            <li v-for="item in fun" v-bind:key="item"> {{ item }} Not submitted</li>
        </ul>
    </div>
</template>

<style lang="css" scoped>

</style>