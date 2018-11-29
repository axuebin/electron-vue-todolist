<script type="text/jsx">
  import { getRandomColor } from '../../util';
  import { addListItem } from '../../store';

  export default {
    name: 'AddItem',
    data() {
      return {
        backgroundColor: getRandomColor(),
        content: '',
      };
    },
    methods: {
      onInput(e) {
        this.content = e.target.value;
      },
      save() {
        addListItem({
          content: this.content,
        });
        this.content = '';
      },
    },
    mounted() {
      this.$nextTick(() => {
        this.$refs.input.focus();
      });
    },
    render() {
      return (
        <div class="add-item">
            <input value={this.content} class="input" placeholder="todo" ref="input" onInput={(e) => this.onInput(e)}/>
            <div class="btn" onClick={this.save}>
              <i class="iconfont icon-add"></i>
            </div>
        </div>
      );
    }
  };
</script>

<style lang="scss" src="./index.scss"></style>
