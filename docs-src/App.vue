<template>
  <div :class="{ app: true, 'show-side': isShowSide }">
    <div class="content">
      <header>
        <h1><a href="https://sunfy.xyz/f-icon">f-icon</a></h1>
        <nav>
          <a href="https://github.com/sfengyuan/f-icon"> <f-icon name="github" /> Source</a>
          <a href="https://feathericons.com/"> <f-icon name="feather" /> Feather</a>
        </nav>
      </header>
      <input
        class="input-search"
        v-model="query"
        type="search"
        placeholder="Search icons"
      />
      <main @click.prevent="onClick">
        <a href="#" class="icon-wrapper" v-for="title in filtered" :key="title" :data-icon="title">
          <f-icon :name="title" :data-icon="title"/>
          <p :data-icon="title">{{ title }}</p>
        </a>
      </main>
      <footer>
        <p>Made by sfy <a href="https://github.com/sfengyuan/f-icon"> <f-icon name="github" /></a></p>
        <a href="#"> <f-icon name="arrow-up-circle" /> </a>
      </footer>
    </div>
    <aside :class="{ show: isShowSide }">
      <header>
        <h3><f-icon name="info" />Usage</h3>
        <button @click="() => { this.iconSelected = null }"><f-icon name="x" /></button>
      </header>
      <main>
        <div>
          <h3>Import all icons</h3>
          <pre contenteditable="true">
            <code class="comment">// In js...</code>
            <code>import feather from 'f-icon' </code>
            <code>Vue.use(feather)</code>
            <code class="comment">// In vue...</code>
            <code>
              &lt;f-icon name="{{ iconSelected || 'feather' }}" /&gt;
            </code>
          </pre>
        </div>
        <div>
          <h3>Only what you need <f-icon :name="iconSelected || 'feather'" /></h3>
          <pre contenteditable="true">
            <code class="comment">// In js...</code>
            <code>import { {{ iconSelected | toPluginName}} } from 'f-icon'</code>
            <code class="comment">// Each icon is a plugin...</code>
            <code>Vue.use({{ iconSelected | toPluginName}})</code>
            <code class="comment">// In vue...</code>
            <code>&lt;{{ iconSelected | toDomName}} /&gt;</code>
          </pre>
        </div>
      </main>
      <footer>
        <h3>Links</h3>
        <div>
          <a href="https://vuejs.org/"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 196.32 170.02"><path fill="#FFF" d="M120.83 0L98.16 39.26 75.49 0H0l98.16 170.02L196.32 0h-75.49z"/><path fill="#FFF" d="M120.83 0L98.16 39.26 75.49 0H39.26l58.9 102.01L157.06 0h-36.23z"/></svg> Vue</a>
          <a href="https://feathericons.com/"><f-icon name="feather"/>Feather</a>
        </div>
      </footer>
    </aside>
  </div>
</template>

<script>
import { iconList } from "./icon-list";
export default {
  name: "App",
  data() {
    return {
      iconList,
      query: "",
      iconSelected: null
    };
  },
  computed: {
    filtered () {
      if (!this.query) {
        return this.iconList;
      }
      return this.iconList.filter((title) => title.match(this.query));
    },
    isShowSide () {
      return this.iconSelected !== null
    }
  },
  methods: {
    onClick(ev) {
      if (ev.target.tagName.toUpperCase() === 'MAIN') { return }
      this.iconSelected = ev.target.dataset.icon || ev.target.parentNode.dataset.icon
    }
  },
  filters: {
    toPluginName (name) {
      if (!name) return 'feather'
      return 'f' + name.split('-').map(word => word.slice(0, 1).toUpperCase() + word.slice(1)).join('')
    },
    toDomName (name) {
      if (!name) return 'feather'
      return 'f-' + name
    }
  }
};
</script>

<!-- Add scoped attribute to limit CSS to this component only -->
<style lang="less">
@import "./css-reset.css";
// @import "https://fonts.googleapis.com/css2?family=Nunito:wght@400&display=swap";

:root {
  --border-color: #ccc;
  --primary-color: #42b983;
}

body {
  font-family: "Nunito", sans-serif;
}
body * {
  box-sizing: border-box;
}
body,
a,
input,
a:visited,
a:hover,
a:active {
  color: #444;
}

.app {
  padding: 0 2rem;
  overflow: hidden;
}

.app.show-side {
  padding-right: 0;
}

.app.show-side .content {
  width: calc(100% - 364px);
  .input-search {
    width: calc(100% - 2rem);
  }
}

.content {
  min-width: 500px;
}

.content header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4rem;
  border-bottom: 1px solid var(--border-color);
}

.content header * {
  line-height: 4rem;
  font-weight: bold;
}

.content h1 {
  font-size: 1.5rem;
}

.content nav {
  display: flex;
}

.content nav a {
  padding: 0 2rem;
  display: flex;
  align-items: center;

  svg {
    margin-right: 0.5rem;
    width: 1rem; height: 1rem;
  }
}

.content nav a:hover {
  background: #eee;
}
.content nav a:active {
  background: var(--primary-color);
}

.content {
  header, footer {
    margin: 0 -2rem;
    padding: 0 2rem;
  }
  footer {
    font-size: 0.8rem;
    border-top: 1px solid var(--border-color);
    height: 4rem;
    color: #666;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;

    p {
      svg {
        width: 1rem; height: 1rem;
        margin-left: 1rem;
      }
    }
    a, p {
      display: flex;
      align-items: center;
    }
  }
}


.input-search {
  width: 100%;
  padding: 1.5rem;
  margin: 2rem 0;
  border-radius: 5rem;
  outline: 0;
  font-size: 1rem;
  border: 1px solid var(--border-color);
}
.input-search:focus {
  border-color: var(--primary-color);
}
.content main {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;

  a:hover {
    svg {
      color: var(--primary-color);
    }
  }
}

.icon-wrapper {
  text-align: center;
  width: 8em;
  height: 6em;
}

.icon-wrapper p {
  margin: 0.5em 0;
  font-size: 0.8rem;
}

aside {
  top: 0;
  right: 0;
  position: fixed;
  overflow: hidden;
  border-left: 1px solid var(--border-color);
  box-sizing: border-box;
  transition: width 0.3s ease-in;
  width: 0;
}

aside.show {
  width: 350px;
  box-shadow: 5px 0 10px 0px #000000;
  background: #FFF;
}

aside {
  header {
    height: 4rem;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid var(--border-color);
    padding: 0 0.8rem;
    h3 {
      display: flex;
      align-items: center;
      .feather {
        margin-right: 0.5rem;
      }
    }

    button {
      background: none;
      border: none;
      &:hover {
        cursor: pointer;
      }
    }
  }

  main {
    height: calc(100vh - 8rem);
    padding: 0.5rem 0.8rem;
    overflow: auto;
    h3 {
      font-weight: bold;
      padding: 1rem 0;
      display: flex;
      align-items: center;
      svg {
        margin-left: 1rem;
        color: var(--primary-color);
      }
    }

    pre, code {
      background: #EEE;
      font-size: 0.8rem;
      text-overflow: ellipsis;
      white-space: nowrap;
      display: block;
      font-family: monospace;
    }

    pre {
      border: 1px solid #FFF;
      outline: none;
      border-radius: 3px;
      padding: 0.5rem 1rem;
      overflow: auto;
      &:focus {
        border: 1px solid var(--primary-color);
      }
    }

    code {
      padding: 0.3rem 0;
      font-style: initial;
      color: #333;
    }

    code.comment {
      color: #666;
      font-style: italic;
    }


  }

  footer {
    padding: 0.5rem 0.8rem;
    height: 4rem;
    border-top: 1px solid var(--border-color);
    border-bottom: 1px solid var(--border-color);
    h3 {
      font-size: 0.8rem;
      color: var(--border-color);
      padding-bottom: 0.3rem;
    }
    div {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
    }
    a {
      color: #FFF !important;
      padding: 3px 0.5rem;
      font-size: 12px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: calc(50% - 0.5rem);
      background: var(--primary-color);
      border-radius: 3px;
      &:first-child {
        svg {
          width: 12px; height: 12px;
        }
      }
    }
    svg {
      margin-right: 0.5rem;
      width: 20px; height:20px;
    }
  }
}

@media screen and (max-width: 600px) {
  .content {
    header {
      display: block;
      font-size: 0.8rem;

      h1 {
        font-size: 1rem;
      }

      nav {
        a {
          padding: 0 2rem 0 0;
        }
      }

      * {
        line-height: 2;
      }
    }
  }
}

</style>
