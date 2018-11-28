<script type="text/jsx">
  import HeaderBar from '../HeaderBar/index';
  import List from '../List/index';
  import { mapState } from '../../store';

  export default {
    name: 'index',
    components: {
      HeaderBar,
      List,
    },
    data() {
      return {};
    },
    computed: {
      ...mapState(['list'])
    },
    render() {
      return <div class="">
        <header-bar/>
        {
          this.list && this.list.length ? <list data={this.list}/> : ''
        }
      </div>;
    },
  };
</script>
