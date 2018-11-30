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
      onKeyup(e) {
        const ENTER_CODE = 13;
        if (e.keyCode === ENTER_CODE) {
          this.content = e.target.value;
          this.save();
        }
      },
      onBlur(e) {
        this.content = e.target.value;
      },
      save() {
        addListItem({
          content: this.content,
          createdTime: Date.now(),
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
          <input value={this.content}
                 class="input"
                 ref="input"
                 onKeyup= {(e) => this.onKeyup(e)}
                 onBlur={(e) => this.onBlur(e)}/>
          <div class="btn" onClick={this.save}>
            <i class="iconfont icon-add"></i>
            <div class="text">新增</div>
          </div>
        </div>
      );
    }
  };
</script>

<style lang="scss" src="./index.scss"></style>
