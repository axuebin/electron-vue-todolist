<script type="text/jsx">
  import { clearLocalList } from '../../store';

  export default {
    name: 'HeadBar',
    methods: {
      empty() {
        clearLocalList();
      }
    },
    render() {
      return (
        <div class="header-bar">
          <p class="title">// TODO</p>
          <div class="btn-area">
            <div class="icon" onClick={this.empty}>
              <i class="iconfont icon-empty"></i>
              <div class="text">清空</div>
            </div>
            <div class="icon">
              <i class="iconfont icon-download"></i>
              <div class="text">导出</div>
            </div>
          </div>
        </div>
      );
    }
  };
</script>

<style lang="scss" src="./index.scss"></style>
