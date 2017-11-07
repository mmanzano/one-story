<template>
    <div>
        <p class="title is-1" v-if="mode == 'create'">{{ modeTitle }} Character</p>

        <div class="field">
            <div class="control">
                <input class="input"
                       type="text"
                       placeholder="Name"
                       v-model="name"
                >
            </div>
        </div>

        <textarea
                class="textarea"
                placeholder="Description"
                rows="10"
                v-model="description"
        ></textarea>
        <div v-if="mode == 'create'">
            <button class="button is-success"
                    @click="add"
                >
                Add
            </button>
        </div>

        <div v-if="mode == 'edit'">
            <button class="button is-success"
                    @click="save"
            >
                Save
            </button>

            <button class="button is-success"
                    @click="cancel"
            >
                Cancel
            </button>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'CharacterForm',
    props: {
      mode: {
        type: String,
        required: true
      },
      character: {
        type: Object,
        required: false,
        default: function () {
          return {
            name: '',
            description: ''
          }
        }
      }
    },
    data () {
      return {
        name: this.character.name,
        description: this.character.description,
        currentCharacter: {
          name: this.character.name,
          description: this.character.description
        }
      }
    },
    computed: {
      modeTitle () {
        return this.mode.charAt(0).toUpperCase() + this.mode.slice(1)
      }
    },
    methods: {
      add () {
        this.currentCharacter = {
          name: this.name,
          description: this.description
        }
        this.name = ''
        this.description = ''

        this.$emit('add', this.currentCharacter)
      },
      save () {
        this.currentCharacter = {
          name: this.name,
          description: this.description
        }

        this.$emit('save', this.currentCharacter)
      },
      cancel () {
        this.$emit('cancel')
      }
    }
  }
</script>