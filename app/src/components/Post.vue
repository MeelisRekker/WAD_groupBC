<template>
  <article v-if="post" class="post">
      <div class="postHeader">
        <span class="avatar">
          <img 
            src="@/assets/images/meesAvatar.png" 
            width="30"
            height="30"
            alt="Mehe avatar"
            class="avatarid"
          />
          <p>{{ post.userName }}</p>
        </span>
        <p>{{ post.kuupaev }}</p>
      </div>
      <p>{{ post.postitus }}</p>
      <picture v-if="post.pilt">
          <img :src="post.pilt" alt="post picture" class="postPicture">
          <p class="pictureCaption">{{ post.piltText }}</p>
      </picture>
      <div class="likes">
        <button @click="addLike">
          <img src="@/assets/images/thumbsUp.png" class="like">
        </button>
        <p>{{ post.likes }} likes</p>
      </div>
  </article>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
    }
  },
  methods: {
    addLike() {
      this.$store.commit("addLike", this.post.id);
    },
  },
}
</script>

<style scoped>
.post {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 3%;
  padding-right: 3%;
  background-color: rgb(212, 204, 204);
  border-radius: 5px;
}

.postHeader {
  width: 100%;
  display: flex;
  padding-top: 5px;
  justify-content: space-between;
  font-weight: 500;
}

.avatar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
}

.pictureCaption {
  margin-top: 5px;
  font-size: 12px;
  text-align: center;
}

.postPicture {
  width: 100%;
  border-radius: 5px;
  box-shadow: 2px 2px 2px grey;
}

p {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 14px;
}

.likes {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
}

.like {
  height: 24px;
  width: 24px;
}
  
</style>
