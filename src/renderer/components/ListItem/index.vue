<script type="text/jsx">

  export default {
    name: 'ListItem',
    props: {
      data: {
        default: () => {},
        type: Object,
      }
    },
    render() {
      return <div class="list-item">
        <p class="content">{ this.data.content }</p>
      </div>;
    }
  };
</script>

<style lang="scss" src="./index.scss"></style>
