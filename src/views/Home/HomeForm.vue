<template>
  <div class="search-form my-5">

    <div class="row">
      <div class="col-12 col-md-8 offset-md-2">
        <!-- Formulario -->
        <b-form @submit.prevent="onSubmit">
          <div class="d-flex justify-content-center">
          <!-- Grupo 1 (Input texto) -->
          <b-form-group
            id="input-group-1"
            label="Epic Id:"
            label-for="input-text"
            description="Format: Jelty"
          >
            <b-form-input
              id="input-text"
              v-model="form.epicId"
              type="text"
              size="lg"
              required
              placeholder="epicId"
            />
          </b-form-group>

          <!-- Grupo 2 (Selector de región) -->
          <b-form-group id="input-group-3"  label="Region:" label-for="input-region">
            <b-form-select
              id="input-region"
              v-model="form.region"
              size="lg"
              :options="regions"
              required
            />
          </b-form-group>
          <!-- Botón envío -->
          <div class="my-auto">
            <b-button type="submit" variant="primary" size="lg">Submit</b-button>
          </div>
          </div>
        </b-form>
      </div>
    </div>

  </div>
</template>
<script>
import { regions } from '@/utils/regions'

export default {
  name: 'MainForm',
  data () {
    return {
      form: {
        epicId: '',
        region: 'br'
      }
    }
  },
  computed: {
    regions () {
      return regions.map(region => ({ value: region, text: region.toUpperCase() }))
    }
  },
  methods: {
    onSubmit () {
      const { region, epicId } = this.form
      this.$router.push({ name: 'Profile', params: { region, epicId: epicId.replace('#', '-') } })
    }
  }
}
</script>
