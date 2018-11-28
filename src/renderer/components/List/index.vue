<script type="text/jsx">
  import ListItem from '../ListItem/index';

  export default {
    name: 'List',
    components: {
      ListItem,
    },
    props: {
      data: {
        default: [],
        type: Array,
      }
    },
    render() {
      return <div class="list">
        {
          this.data.map((item) => <list-item data={item}/>)
        }
      </div>;
    }
  };
</script>

<style lang="scss" src="./index.scss"></style>
