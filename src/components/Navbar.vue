<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">Kanban-Js</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
      </ul>
      <button type="button" class="btn btn-outline-secondary text-white" @click="clearForm" data-toggle="modal" data-target="#exampleModal" data-whatever="@getbootstrap">Submit New Task</button>

      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">New Task</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div>
                <div class="padding-item">
                  <label for="title">Title</label>
                  <input class="form-control" type="text" v-model="title"><br>
                  <label for="title">Description</label>
                  <input class="form-control" type="text" v-model="description"><br>
                  <label for="title">Assigned To</label>
                  <input class="form-control" type="text" v-model="assignedTo"><br>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button class="btn btn-outline-success" type="button" @click="submitTask" data-dismiss="modal">Add Task</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref } from '../firebase'
import swal from 'sweetalert2'

export default {
  data () {
    return {
      title: '',
      description: '',
      assignedTo: '',
      status: 'back-log'
    }
  },
  methods: {
    submitTask () {
      ref.push({ title: this.title, description: this.description, assignedTo: this.assignedTo, status: this.status })
      swal({
        position: 'center',
        type: 'success',
        title: 'Your task has been added',
        showConfirmButton: false,
        timer: 1500
      })
    },
    clearForm () {
      this.title = ''
      this.description = ''
      this.assignedTo = ''
    }
  }
}
</script>
