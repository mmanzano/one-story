<template>
    <div>
        <button
                class="button is-primary"
                v-if="!showCharacterList"
                @click="toggleShow"
        >
            Show character List
        </button>
        <div v-if="showCharacterList">
            <button
                    class="button is-primary"
                    @click="toggleShow"
            >
                Hide character List
            </button>

            <div class="columns is-multiline">
                <div
                        class="column is-half"
                        v-for="character in characterList"
                >
                    <character-content :character="character"></character-content>
                </div>
            </div>

            <character-form mode="create" @add="addCharacter"></character-form>
        </div>
    </div>
</template>

<script>
  import CharacterContent from '../components/CharacterContent'
  import CharacterForm from '../components/CharacterForm'

  export default {
    components: {
      CharacterContent,
      CharacterForm
    },
    data () {
      return {
        showCharacterList: false,
        characterList: [
          {
            name: 'Mary Poppins',
            description: 'A person that made the kids very happy'
          },
          {
            name: 'Mary Poppins',
            description: 'A person that made the kids very happy'
          },
          {
            name: 'Mary Poppins',
            description: 'A person that made the kids very happy'
          },
          {
            name: 'Mary Poppins',
            description: 'A person that made the kids very happy'
          },
          {
            name: 'Mary Poppins',
            description: 'A person that made the kids very happy'
          },
          {
            name: 'Mary Poppins',
            description: 'A person that made the kids very happy'
          },
          {
            name: 'Mary Poppins',
            description: 'A person that made the kids very happy'
          }
        ]
      }
    },
    methods: {
      toggleShow () {
        this.showCharacterList = !this.showCharacterList
      },
      addCharacter (newCharacter) {
        this.characterList.push(newCharacter)
      }
    }
  }
</script>