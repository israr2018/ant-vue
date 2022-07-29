  <template>
  <a-steps :current="current">
    <a-step>
      <!-- <span slot="title">Finished</span> -->
      <template status #title>Select Exam</template>
      <template #description> </template>
    </a-step>
    <a-step title="Add Section"> </a-step>
    <a-step title="Add Question"> Add Question </a-step>
    <a-step title="Preview Paper"> Preview Paper </a-step>
  </a-steps>
  <div class="steps-content">
    <examp-type v-if="current === 0" @save-data="saveData" />
    <paper-sections v-if="current===1" @save-data="saveData" />
  </div>
  <!--  <div class="steps-action">
    <a-button v-if="current < 2" type="primary" @click="next">Next</a-button>
    <a-button
      v-if="current == 2"
      type="primary"
      @click="message.success('Processing complete!')"
    >
      Done
    </a-button>
    <a-button v-if="current > 0" style="margin-left: 8px" @click="prev"
      >Previous</a-button
    >
  </div> -->
</template>

<script>
/* eslint-disable */
import ExampType from '../components/autopaper/ExamType.vue';
import PaperSections from '../components/autopaper/PaperSections.vue';

export default {
  components: { ExampType,PaperSections },
  data() {
    return {
      current: 1,
      examType:'',
     

    };
  },
  methods: {
    saveData(data) {
      console.log('data', data);
      this.current = data.step;
    },
   
    
  },
  watch:{
    current(){
      // localStorage.setItem('currentStep',this.current)
    }
  },
  mounted(){
  // if(parseInt(localStorage.getItem('currentStep')))
  //  this.current = parseInt(localStorage.getItem('currentStep'));
  // },
}
}
</script>

<style>
</style>
