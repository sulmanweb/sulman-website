<template>
  <div class="page-article my-2">
    <div class="bg-cool-gray-700 overflow-hidden shadow-xl sm:rounded">
      <div class="flex flex-col justify-center">
        <img v-if="!!post.cover_image" :src="post.cover_image" :alt="post.title" />
        <img v-if="!post.cover_image" src="@/assets/images/SulmanWeb-cover.png" :alt="post.title" />
        <p class="px-4 pt-1 text-xs text-cool-gray-400 italic">
          {{ post.readable_publish_date }} &middot;
          {{ post.public_reactions_count }} Reactions
        </p>
        <p class="px-4 pt-1">
          <span
            class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium leading-5 bg-gray-100 text-gray-800 mr-1"
            v-for="tag in post.tags"
            :key="tag"
          >{{ tag }}</span>
        </p>
        <h1
          class="text-2xl md:text-3xl font-semibold tracking-wider pt-1 pb-2 px-4"
        >{{ post.title }}</h1>
      </div>
    </div>
    <div class="bg-cool-gray-700 overflow-hidden shadow-xl sm:rounded my-2">
      <div class="px-4 py-4 article" v-html="post.body_html"></div>
    </div>
  </div>
</template>

<script>
import hljs from "highlight.js";

export default {
  name: "Article",
  data() {
    return {
      post: {}
    };
  },
  methods: {
    async getPost() {
      try {
        let response = await axios.get(
          `https://dev.to/api/articles/sulmanweb/${this.$route.params.slug}`
        );
        this.post = response.data;
      } catch (err) {
        console.error(err);
      }
    }
  },
  mounted() {
    this.getPost();
  },
  updated() {
    document.querySelectorAll("pre.highlight").forEach(block => {
      hljs.highlightBlock(block);
    });
    var anchors = document.querySelectorAll("[class*=ltag] a");
    for (var i = 0; i < anchors.length; i++) {
      if (anchors[i].hostname === "sulmanweb.com") {
        anchors[i].href = anchors[i].href.replace(
          "https://sulmanweb.com",
          "https://dev.to"
        );
      }
    }
  },
  metaInfo() {
    return {
      title: this.post.title + " <- SulmanWeb",
      meta: [
        {
          name: "description",
          content:
            "#RubyOnRails #NodeJS #VueJS Experienced Web App Dev in Lahore, Pakistan"
        },
        { property: "og:title", content: this.post.title + " <- SulmanWeb" },
        {
          property: "og:site_name",
          content: this.post.title + " <- SulmanWeb"
        },
        { property: "og:type", content: "website" },
        {
          property: "og:url",
          content: "https://sulmanweb.com/blog/" + this.post.slug
        },
        {
          property: "og:image",
          content: this.post.social_image
        },
        {
          property: "og:description",
          content: this.post.description
        },
        { name: "twitter:card", content: "summary" },
        {
          name: "twitter:site",
          content: "https://sulmanweb.com/blog/" + this.post.slug
        },
        { name: "twitter:title", content: this.post.title + " <- SulmanWeb" },
        {
          name: "twitter:description",
          content: this.post.description
        },
        { name: "twitter:creator", content: "@sulmanweb" },
        {
          name: "twitter:image:src",
          content: this.post.social_image
        },
        { itemprop: "name", content: this.post.title + " <- SulmanWeb" },
        {
          itemprop: "description",
          content: this.post.description
        },
        {
          itemprop: "image",
          content: this.post.social_image
        }
      ]
    };
  }
};
</script>