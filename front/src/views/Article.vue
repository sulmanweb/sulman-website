<template>
  <div class="page-article my-2">
    <div class="bg-cool-gray-700 overflow-hidden shadow-xl sm:rounded">
      <div class="flex flex-col justify-center">
        <img
          v-if="!!post.cover_image"
          :src="post.cover_image"
          :alt="post.title"
        />
        <img
          v-if="!post.cover_image"
          src="@/assets/images/SulmanWeb-cover.png"
          :alt="post.title"
        />
        <h1 class="text-2xl md:text-3xl font-semibold tracking-wider py-2 px-4">
          {{ post.title }}
        </h1>
      </div>
    </div>
    <div class="bg-cool-gray-700 overflow-hidden shadow-xl sm:rounded my-2">
      <div class="px-4 py-4 article" v-html="post.body_html"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Article",
  data() {
    return {
      post: {},
    };
  },
  methods: {
    async getPost() {
      try {
        let response = await axios.get(
          `https://dev.to/api/articles/sulmanweb/${this.$route.params.slug}`
        );
        this.post = response.data;
        console.log(this.post);
      } catch (err) {
        console.error(err);
      }
    },
  },
  mounted() {
    this.getPost();
  },
};
</script>

<style scoped>
.article {
  @apply text-cool-gray-200 tracking-wide text-sm mx-2;
}
@screen md {
  .article {
    @apply mx-4;
  }
}
.article >>> img {
  @apply mx-auto;
}
.article >>> h1 {
  @apply text-4xl;
}
.article >>> h2 {
  @apply text-3xl font-semibold;
}
.article >>> h3 {
  @apply text-2xl font-medium;
}
.article >>> p {
  @apply text-base py-2 leading-7;
}
.article >>> ul {
  @apply m-3;
}
.article >>> li {
  @apply my-2 mx-auto list-disc;
}
.article >>> blockquote {
  @apply border-l-4 bg-cool-gray-800 border-cool-gray-300 rounded;
}
.article >>> blockquote::before {
  @apply text-cool-gray-200 text-5xl leading-3;
  content: open-quote;
  vertical-align: -0.4em;
}
.article >>> blockquote p {
  @apply inline;
}
.article >>> a {
  @apply text-cool-gray-50;
}
.article >>> li {
  @apply ml-4;
}
.article >>> code {
  @apply bg-cool-gray-900 px-2 py-1 rounded-lg font-mono;
}
.article >>> pre {
  @apply bg-cool-gray-900 p-1 shadow-lg rounded-lg font-mono overflow-x-scroll overflow-y-hidden;
}
.article >>> blockquote {
  padding: 2em;
}
.article >>> .ltag__replit iframe {
  @apply max-w-7xl m-4;
}
</style>
