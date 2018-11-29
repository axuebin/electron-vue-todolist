<script type="text/jsx">
  import AddItem from '../AddItem/index';
  import ListItem from '../ListItem/index';

  export default {
    name: 'List',
    components: {
      AddItem,
      ListItem,
    },
    props: {
      data: {
        default: [],
        type: Array,
      }
    },
    render() {
      return (
        <div class="list">
          <add-item/>
          {
            this.data.map((item) => <list-item data={item}/>)
          }
        </div>
      );
    }
  };
</script>

<style lang="scss" src="./index.scss"></style>
