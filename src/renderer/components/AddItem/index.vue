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
      onBlur(e) {
        this.content = e.target.value;
      },
      save() {
        addListItem({
          content: this.content,
        });
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
            <input class="input" placeholder="todo" ref="input" onBlur={(e) => this.onBlur(e)}/>
            <div class="btn" onClick={this.save}>增加</div>
        </div>
      );
    }
  };
</script>

<style lang="scss" src="./index.scss"></style>
