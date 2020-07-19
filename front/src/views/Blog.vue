<template>
  <div class="page-blog my-2">
    <div class="bg-cool-gray-700 overflow-hidden shadow-xl sm:rounded">
      <div class="flex justify-center py-2">
        <h1 class="text-2xl md:text-3xl font-semibold tracking-wider">
          Publications
        </h1>
      </div>
    </div>
    <div
      v-for="post in posts"
      :key="post.id"
      class="bg-cool-gray-700 overflow-hidden shadow-xl sm:rounded my-2"
    >
      <a href="#">
        <div class="md:grid md:grid-cols-4 md:gap-4">
          <div class="col-span-1">
            <img
              :src="post.cover_image"
              v-if="!!post.cover_image"
              :alt="post.title"
              class="w-full md:w-auto"
            />
            <img
              src="@/assets/images/SulmanWeb-cover.png"
              v-if="!post.cover_image"
              :alt="post.title"
              class="w-full md:w-auto"
            />
          </div>
          <div class="flex flex-col justify-center col-span-3 px-4">
            <h2 class="text-xl font-bold tracking-widest pt-2">
              {{ post.title }}
            </h2>
            <p class="text-sm tracking-wide py-2">{{ post.description }}</p>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Blog",
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    async getPosts() {
      try {
        let response = await axios.get(
          "https://dev.to/api/articles?username=sulmanweb&per_page=1000"
        );
        this.posts = response.data;
      } catch (err) {
        console.error(err);
      }
    },
  },
  mounted() {
    this.getPosts();
  },
};
</script>
