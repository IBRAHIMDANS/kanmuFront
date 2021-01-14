<template>
  <div :class="{
    'section': true,
    'input': true,
    'placeholder': value.length <= 0,
    'focused': focused
  }">
    <template v-if="inline">
      <div class="inline">
        <label v-if="label.trim().length > 0" :for="_id">{{label}}</label>
        <template v-if="type==='plain'">
          <div v-if="type === 'plain'" class="textarea">
            <span v-if="placeholder.trim().length > 0" class="placeholder">{{placeholder}}</span>
            <span ref="input" class="value" contenteditable="plain-text" @input="changeText" @focus="focus" @blur="blur"></span>
          </div>
        </template>
        <template v-else>
          <input @blur="blur" @focus="focus" @input="changeText" :placeholder="placeholder" ref="input" :value="value" :id="_id" :name="_name" :type="type"/>
        </template>
      </div>
    </template>
    <template v-else>
      <label v-if="label.trim().length > 0" :for="_id">{{label}}</label>
      <template v-if="type==='plain'">
        <div v-if="type === 'plain'" class="textarea">
          <span v-if="placeholder.trim().length > 0" class="placeholder">{{placeholder}}</span>
          <span ref="input" class="value" contenteditable="plain-text" @input="changeText" @focus="focus" @blur="blur"></span>
        </div>
      </template>
      <template v-else>
        <input @blur="blur" @focus="focus" @input="changeText" :placeholder="placeholder" ref="input" :value="value" :id="_id" :name="_name" :type="type"/>
      </template>
    </template>
  </div>
</template>

<script>
const Input = {
  data() {
    return {
      focused: false
    }
  },
  props: {
    valid: {
      type: String,
      default: false
    },
    placeholder: {
      type: String,
      default: false
    },
    inline: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ""
    },
    id: String,
    name: String,
    type: {
      type: String,
      default: "text"
    },
    value: {
      type: String,
      default: ""
    }
  },
  methods: {
    changeText: function(evt){
      if (this.type === 'plain'){
        this.$emit("change",evt.target.innerText);
      }else{
        this.$emit("change",evt.target.value);
      }
    },
    focus: function(){
      this.$emit("focus");

      this.focused = true;
    },
    blur: function(){
      this.$emit("blur");

      this.focused = false;

      if (this.type === "plain"){
        this.$refs.input.innerText = this.value;
      }
    },
  },
  mounted() {
    if (this.type === "plain"){
      this.$refs.input.innerText = this.value;
    }
  },
  computed: {
    _id: function(){
      if (typeof this.id !== "string"){
        return "input-"+this._name;
      }

      return this.id;
    },
    _name: function(){
      if (typeof this.name !== "string"){
        return this._id;
      }

      return this.name;
    }
  }
}

export default Input
</script>
