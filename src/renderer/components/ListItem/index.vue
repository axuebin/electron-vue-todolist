<script type="text/jsx">
    import { getRandomColor } from '../../util';
    import { updateListItem } from '../../store';

    export default {
    name: 'ListItem',
    props: {
      data: {
        default: () => {
        },
        type: Object,
      }
    },
    data() {
      return {
        isEdit: false,
        backgroundColor: getRandomColor(),
      };
    },
    methods: {
      onDblclick() {
        if (!this.isEdit) {
          this.isEdit = true;
          const element = this.$refs.content;
          const oldHtml = element.innerHTML;
          const input = document.createElement('input');
          input.className = 'input';
          input.type = 'text';
          input.value = oldHtml;
          element.innerHTML = '';
          element.appendChild(input);
          input.setSelectionRange(0, oldHtml.length);
          input.focus();
          const that = this;
          input.onblur = function () {
            const newValue = this.value === oldHtml ? oldHtml : this.value;
            // element.innerHTML = newValue;
            that.save(newValue);
            that.isEdit = false;
          };
        }
      },
      save(val) {
        updateListItem({
          id: this.data.id,
          content: val,
          updatedTime: Date.now()
        })
      },
    },
    render() {
      return (
        <div class="list-item" onDblclick={this.onDblclick} style={{ background: this.backgroundColor }}>
          <p class="content" ref="content">{this.data.content}</p>
        </div>
      );
    }
  };
</script>

<style lang="scss" src="./index.scss"></style>
