<script type="text/jsx">
  import { getRandomColor } from '../../util';
  import { updateListItem, removeListItem } from '../../store';

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
        rightBackgroundColor: '',
        deleteBackgroundColor: '',
        isClick: false,
        startX: 0,
        dX: 0,
        direction: '',
        transform: '',
      };
    },
    methods: {
      onDblclick() {
        this.isClick = false;
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
          input.onkeydown = function (e) {
            that.isEdit = false;
            const ENTER_CODE = 13;
            if (e.keyCode === ENTER_CODE) {
              this.blur();
            }
          };
          input.onblur = function () {
            that.isEdit = false;
            const newValue = this.value === oldHtml ? oldHtml : this.value;
            element.removeChild(input);
            element.innerText = newValue;
            that.save(newValue);
          };
        }
      },
      save(val) {
        const item = this.data;
        item.content = val;
        item.updatedTime = Date.now();
        updateListItem(item);
      },
      computedBackgroundColor() {
        const regex = /#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})/g;
        const colors = this.backgroundColor.match(regex);
        this.rightBackgroundColor = colors[0];
        this.deleteBackgroundColor = colors[colors.length - 1];
      },
      onMouseDown(e) {
        this.startX = e.pageX;
      },
      onMouseMove(e) {
        this.dX = e.pageX - this.startX;
        if (this.startX >= 375 / 2 && this.dX <= 0 && this.dX >= - 375 / 3) {
          this.direction = 'left';
          this.transform = `translateX(${this.dX}px)`;
        }
        if (!this.data.isDone && this.startX < 375 / 2 && this.dX > 0 && this.dX < 375 / 3) {
          this.direction = 'right';
          this.transform = `translateX(${this.dX}px)`;
          if (this.dX >= 60) {
            this.$refs.content.classList.add('done')
          } else {
            this.$refs.content.classList.remove('done')
          }
        }
      },
      onMouseUp() {
        this.transform = '';
        this.end();
        if (this.direction) {
          this.direction = '';
        }
      },
      end() {
        const item = this.data;
        if (this.direction === 'right' && this.dX >= 60) {
          item.isDone = true;
          item.updatedTime = Date.now();
          updateListItem(item);
        }
        if (this.direction === 'left' && this.dX <= -60) {
          removeListItem(item);
        }
      }
    },
    mounted() {
      this.computedBackgroundColor();
      this.$nextTick(() => {
        this.$refs.item.addEventListener('dblclick', () => {
          this.onDblclick();
        });
        this.$refs.item.addEventListener('mousedown', e => {
          this.isClick = true;
          this.onMouseDown(e);
        });
        this.$refs.item.addEventListener('mousemove', e => {
          if (this.isClick && !this.isEdit) {
            this.onMouseMove(e);
          }
        });
        this.$refs.item.addEventListener('mouseup', e => {
          if (this.isClick && !this.isEdit && Math.abs(this.dX) >= 10) {
            this.isClick = false;
            this.onMouseUp(e);
          }
        });
        this.$refs.item.addEventListener('mouseleave', e => {
          if (this.isClick && !this.isEdit && Math.abs(this.dX) >= 10) {
            this.isClick = false;
            this.onMouseUp(e);
          }
        });
      });
    },
    render() {
      return (
        <div class="list-item">
          <div class="right" style={{ background: this.rightBackgroundColor }}>
            <i class="iconfont icon-right"></i>
          </div>
          <div class="delete" style={{ background: this.deleteBackgroundColor }}>
            <i class="iconfont icon-delete"></i>
          </div>
          <div class="item"
               ref="item"
               style={{
                 background: this.backgroundColor,
                 transform: this.transform
               }}>
            <p class={['content', this.data.isDone ? 'done' : '']} ref="content">{this.data.content}</p>
          </div>
        </div>
      );
    }
  };
</script>

<style lang="scss" src="./index.scss"></style>
