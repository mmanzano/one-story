<template>
    <div>
        <div class="card" v-if="!editMode">
            <div class="card-content">
                <div class="media">
                    <div class="media-left">
                        <figure class="image is-48x48">
                            <i class="material-icons">perm_identity</i>
                        </figure>
                    </div>
                    <div class="media-content">
                        <p class="title is-4" v-text="character.name"></p>
                    </div>
                </div>

                <div class="content" v-text="character.description">
                </div>
                <button class="button is-success"
                        @click="editMode = true"
                >
                    Edit
                </button>
            </div>
        </div>

        <character-form
                mode="edit"
                :character="character"
                v-if="editMode"
                @cancel="cancel"
                @save="update"
        ></character-form>
    </div>
</template>

<script>
  import CharacterForm from '../components/CharacterForm'

  export default {
    components: {
      CharacterForm
    },
    props: ['character'],
    data () {
      return {
        editMode: false
      }
    },
    methods: {
      cancel () {
        this.editMode = false
      },
      update (updatedCharacter) {
        this.character.name = updatedCharacter.name
        this.character.description = updatedCharacter.description
        this.editMode = false
      }
    }
  }
</script>