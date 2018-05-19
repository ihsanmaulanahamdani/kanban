<template>
  <div class="home">
    <div class="container-fluid">
      <div class="row center-items">
        <div class="card-size">
          <div class="card text-white bg-primary">
            <div class="card-header">
              <h3 class="text-center size-of-text">Back-Log</h3>
            </div>
            <div class="card-body">
              <div v-for="task of tasks" :key="task['.key']">
                <div v-if="task.status === 'back-log'">
                  <div class="card mb-2 text-dark">
                    <div class="card-header">
                      <button type="button" class="close" @click="deleteTask(task['.key'])" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                      <h6 class="card-text">{{ task.title }}</h6>
                    </div>
                    <div class="card-body">
                      <p>{{ task.description }}</p>
                    </div>
                    <div class="card-footer">
                      <button class="btn btn-primary" @click="updateTaskStatus(task['.key'], 'todo')"><i class="fas fa-arrow-right"></i></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="card-size">
          <div class="card text-white bg-warning">
            <div class="card-header">
              <h3 class="text-center size-of-text">Todo</h3>
            </div>
            <div class="card-body">
              <div v-for="task of tasks" :key="task['.key']">
                <div v-if="task.status === 'todo'">
                  <div class="card mb-2 text-dark">
                    <div class="card-header">
                      <button type="button" class="close" @click="deleteTask(task['.key'])" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                      <h6 class="card-text">{{ task.title }}</h6>
                    </div>
                    <div class="card-body">
                      <p>{{ task.description }}</p>
                    </div>
                    <div class="card-footer">
                      <button class="btn btn-warning" @click="updateTaskStatus(task['.key'], 'back-log')"><i class="fas fa-arrow-left"></i></button>
                      <button class="btn btn-warning" @click="updateTaskStatus(task['.key'], 'doing')"><i class="fas fa-arrow-right"></i></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="card-size">
          <div class="card text-white bg-info">
            <div class="card-header">
              <h3 class="text-center size-of-text">Doing</h3>
            </div>
            <div class="card-body">
              <div v-for="task of tasks" :key="task['.key']">
                <div v-if="task.status === 'doing'">
                  <div class="card mb-2 text-dark">
                    <div class="card-header">
                      <button type="button" class="close" @click="deleteTask(task['.key'])" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                      <h6 class="card-text">{{ task.title }}</h6>
                    </div>
                    <div class="card-body">
                      <p>{{ task.description }}</p>
                    </div>
                    <div class="card-footer">
                      <button class="btn btn-info" @click="updateTaskStatus(task['.key'], 'todo')"><i class="fas fa-arrow-left"></i></button>
                      <button class="btn btn-info" @click="updateTaskStatus(task['.key'], 'done')"><i class="fas fa-arrow-right"></i></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="card-size">
          <div class="card text-white bg-success">
            <div class="card-header">
              <h3 class="text-center size-of-text">Done</h3>
            </div>
            <div class="card-body">
              <div v-for="task of tasks" :key="task['.key']">
                <div v-if="task.status === 'done'">
                  <div class="card mb-2 text-dark">
                    <div class="card-header">
                      <button type="button" class="close" @click="deleteTask(task['.key'])" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                      <h6 class="card-text">{{ task.title }}</h6>
                    </div>
                    <div class="card-body">
                      <p>{{ task.description }}</p>
                    </div>
                    <div class="card-footer">
                      <button class="btn btn-success" @click="updateTaskStatus(task['.key'], 'doing')"><i class="fas fa-arrow-left"></i></button>
                      <button class="btn btn-success" @click="deleteTask(task['.key'])"><i class="fas fa-check"></i></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from '../firebase'
import swal from 'sweetalert2'

export default {
  name: 'home',
  firebase: {
    tasks: ref
  },
  methods: {
    updateTaskStatus (key, statusUpdate) {
      ref.child(key).update({ status: statusUpdate })
    },
    deleteTask (key) {
      swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.value) {
          ref.child(key).remove()
          swal({
            position: 'center',
            type: 'success',
            title: 'Your file has been deleted',
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
    }
  }
}
</script>

<style scoped>
.padding-item {
  margin: 20px auto;
}
.home {
  text-align: center;
  display: flex;
  flex-wrap: wrap;
}
.size-of-text {
  font-size: 2vw;
}
.size-text-content {
  font-size: 1vw;
}
.card-size {
  width: 20rem;
  margin: 3px 3px;
}
.center-items {
  justify-content: center;
}
</style>
