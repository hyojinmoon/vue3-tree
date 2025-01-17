<template>
  <li
    class="tree-row"
    :style="{
      'padding-left': indentSize + 'px',
      'gap': gap + 'px',
      '--row-hover-background': rowHoverBackground,
      'cursor': 'pointer'
    }"
  >
    <div
      class="tree-row-item"
      @click="onThisClick(node, $event)"
      @click.stop="toggleExpanded(node)"
    >
      <div v-if="useIcon" class="tree-row-item-icon-wrapper">
        <template v-if="childCount">
          <template v-if="!node.expanded">
            <slot name="iconActive">
              <arrow-right />
            </slot>
          </template>
          <template v-else>
            <slot name="iconInactive">
              <arrow-down />
            </slot>
          </template>
        </template>
      </div>
      <slot
        :id="node.id"
        name="checkbox"
        :node="node"
        :checked="node.checked"
        :indeterminate="node.indeterminate"
      >
        <input
          v-if="useCheckbox"
          v-model="node.checked"
          type="checkbox"
          :checked="node.checked"
          :indeterminate="node.indeterminate"
          @click.stop="toggleCheckbox"
        />
      </slot>
      <span class="tree-row-txt">
        {{ node.label }}
      </span>
      <template v-if="childCount && showChildCount">
        <slot
          name="childCount"
          :count="childCount"
          :checkedCount="checkedChildCount"
          :childs="node.nodes"
        >
          <span class="child-count">
            {{ childCount }}
          </span>
        </slot>
      </template>
      <template v-if="node && useRowDelete">
        <div class="delete-icon" @click.stop="removedRow(node)">
          <slot name="deleteIcon">
            <delete-icon />
          </slot>
        </div>
      </template>
    </div>
    <ul
      v-if="node.expanded"
      :style="{'gap': gap + 'px'}"
      class="tree-list"
    >
      <tree-row
        v-for="child in node.nodes"
        :ref="'tree-row-' + child.id"
        :key="child.id"
        :node="child"
        :use-checkbox="useCheckbox"
        :check-type="checkType"
        :use-icon="useIcon"
        :use-row-delete="useRowDelete"
        :show-child-count="showChildCount"
        :gap="gap"
        :expand-row-by-default="expandRowByDefault"
        :indent-size="indentSize"
        :row-hover-background="rowHoverBackground"
        :set-node="setNode"
        :get-node="getNode"
        :update-node="updateNode"
        :expandable="expandable"
        @delete-row="removedRow"
        @node-expanded="onNodeExpanded"
        @checkbox-toggle="onCheckboxToggle"
        @selectedNode="onThisClick"
      >
        <template #childCount="{ count, checkedCount, childs }">
          <slot
            name="childCount"
            :count="count"
            :checkedCount="checkedCount"
            :childs="childs"
          />
        </template>
        <template #iconActive>
          <slot name="iconActive">
            <arrow-right />
          </slot>
        </template>
        <template #iconInactive>
          <slot name="iconInactive">
            <arrow-down />
          </slot>
        </template>
        <template #deleteIcon>
          <slot name="deleteIcon">
            <delete-icon />
          </slot>
        </template>
        <template #checkbox="{ node: slotNode, checked, indeterminate }">
          <slot
            :id="slotNode.id"
            name="checkbox"
            :node="slotNode"
            :checked="checked"
            :indeterminate="indeterminate"
          />
        </template>
      </tree-row>
    </ul>
  </li>
</template>

<script>
import { computed, nextTick, watch } from 'vue';
import ArrowRight from './Icons/ArrowRight.vue';
import ArrowDown from './Icons/ArrowDown.vue';
import DeleteIcon from './Icons/DeleteIcon.vue';

export default {
  components: {
    ArrowRight,
    ArrowDown,
    DeleteIcon,
  },
  props: {
    node: {
      type: Object,
      required: true,
    },
    indentSize: {
      type: Number,
      required: true,
    },
    gap: {
      type: Number,
      required: true,
    },
    getNode: {
      type: Function,
      required: true,
    },
    setNode: {
      type: Function,
      required: true,
    },
    updateNode: {
      type: Function,
      required: true,
    },
    expandRowByDefault: {
      type: Boolean,
      default: false,
    },
    useCheckbox: {
      type: Boolean,
      default: false,
    },
    checkType: {
      type: String,
      default: '',
    },
    useIcon:{
      type: Boolean,
      default: true,
    },
    useRowDelete:{
      type: Boolean,
      default: false,
    },
    showChildCount: {
      type: Boolean,
      default: false,
    },
    rowHoverBackground: {
      type: String,
      default: '#e0e0e0',
    },
    expandable: {
      type: Boolean,
      default: true,
    },
  },
  emits: ['nodeExpanded', 'checkboxToggle', 'deleteRow', 'selectedNode'],
  setup(props, { emit }) {
    const childCount = computed(() => props.node.nodes?.length);
    const checkedChildCount = computed(() => props.node.nodes?.filter(item => item.checked).length);

    const toggleExpanded = node => {
      if (props.expandable && childCount.value) {
        props.node.expanded = props.node.nodes ? !props.node.expanded : false;
        nextTick(() => {
          emit('nodeExpanded', node, props.node.expanded);
        });
      }
    };

    // redirect the event toward the Tree component
    const onNodeExpanded = (node, state) => {
      emit('nodeExpanded', node, state);
    };

    const toggleCheckbox = () => {
      const { node, updateNode } = props;
      updateNode(node.id, { checked: !node.checked });
    };

    const onCheckboxToggle = (context, event) => {
      emit('checkboxToggle', context, event);
    };

    const removedRow = node => {
      emit('deleteRow', node);
    };

    // custom
    const onThisClick = (node, e) => {
      emit('selectedNode', node, e);
    };

    return {
      childCount,
      checkedChildCount,
      toggleExpanded,
      onNodeExpanded,
      toggleCheckbox,
      onCheckboxToggle,
      removedRow,
      onThisClick,
    };
  },
};
</script>

<style lang="scss">
.tree-list, .tree-row {
  display: grid;
  margin: 0;
  padding: 0;
}

.tree-row-item > input[type="checkbox"] {margin: 0px 5px 0px 5px;}

.tree-row {
  transform-style: preserve-3d;

  &-item {
    display: flex;
    align-items: center;
    position: relative;
    padding: 5px 10px;

    &:hover:before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      background-color: var(--row-hover-background);
      transform: translate3d(0, 0, -0.1px);
      width: 200vw;
      margin-left: calc(100% - 100vw);
      z-index: -1;
    }

    .child-count {
      color: gray;
      margin-left: 6px;
    }

    .delete-icon {
      color: red;
      opacity: 0;
      display: flex;
      align-items: center;
      width: 16px;
      height: 16px;
    }

    &-icon-wrapper {
      width: 15px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
  }

  &-item:hover {
    .delete-icon {
      opacity: 1;
    }
  }

  &-txt {
    user-select: none;
  }
}
</style>
