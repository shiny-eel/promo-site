import * as React from 'react';
import * as style from './style.css';
import ScrollableAnchor, { configureAnchors, goToAnchor } from 'react-scrollable-anchor';

export class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
    configureAnchors({ scrollDuration: 200 });
  }

  render() {
    return (
      <div className={style.body}>
        <ScrollableAnchor id={'section1'}>
          <div className={style.section}>
            <div className={[style.normal, style.pic].join(' ')}>
              <h1>Lu Shien Lee</h1>
            </div>
          </div>
        </ScrollableAnchor>
        <ScrollableAnchor id={'section2'}>
          <div className={[style.section, style.section2].join(' ')}>
            <div className={style.normal}>Hello</div>
            <h1>Next Section</h1>
          </div>
        </ScrollableAnchor>
        <ScrollableAnchor id={'section3'}>
          <div className={style.section}>
            <button onClick={(e) => goToAnchor('section1')}> CLICK ME </button>
            <div className={style.normal}>Hello</div>
            <h1>Next Section Again</h1>
          </div>
        </ScrollableAnchor>
      </div>
    );
  }
}

// import * as React from 'react';
// import * as style from './style.css';
// import { connect } from 'react-redux';
// // import { bindActionCreators, Dispatch } from 'redux';
// import { RouteComponentProps } from 'react-router';
// // import { TodoActions } from 'app/actions';
// // import { RootState } from 'app/reducers';
// import { TodoModel } from 'app/models';
// // import { omit } from 'app/utils';
// import { Header, TodoList, Footer } from 'app/components';

// const FILTER_VALUES = (Object.keys(TodoModel.Filter) as (keyof typeof TodoModel.Filter)[]).map(
//   (key) => TodoModel.Filter[key]
// );

// export namespace App {
//   export interface Props extends RouteComponentProps<void> {
//     // todos: RootState.TodoState;
//     // actions: TodoActions;
//     filter: TodoModel.Filter;
//   }
// }

// @connect(
//   (ownProps): Pick<App.Props, 'filter'> => {
//     const hash = ownProps.location && ownProps.location.hash.replace('#', '');
//     const filter = FILTER_VALUES.find((value) => value === hash) || TodoModel.Filter.SHOW_ALL;
//     return { filter };
//   },
//   // (dispatch: Dispatch): Pick<App.Props, 'actions'> => ({
//   //   actions: bindActionCreators(omit(TodoActions, 'Type'), dispatch)
//   // })
// )
// export class App extends React.Component<App.Props> {
//   static defaultProps: Partial<App.Props> = {
//     filter: TodoModel.Filter.SHOW_ALL
//   };

//   constructor(props: App.Props, context?: any) {
//     super(props, context);
//     this.handleClearCompleted = this.handleClearCompleted.bind(this);
//     this.handleFilterChange = this.handleFilterChange.bind(this);
//   }

//   handleClearCompleted(): void {
//     const hasCompletedTodo = this.props.todos.some((todo) => todo.completed || false);
//     if (hasCompletedTodo) {
//       this.props.actions.clearCompleted();
//     }
//   }

//   render() {
//     const { todos, actions, filter } = this.props;
//     const activeCount = todos.length - todos.filter((todo) => todo.completed).length;
//     const filteredTodos = filter ? todos.filter(FILTER_FUNCTIONS[filter]) : todos;
//     const completedCount = todos.reduce((count, todo) => (todo.completed ? count + 1 : count), 0);

//     return (
//       <div className={style.normal}>
//         <Header addTodo={actions.addTodo} />
//         <TodoList todos={filteredTodos} actions={actions} />
//         <Footer
//           filter={filter}
//           activeCount={activeCount}
//           completedCount={completedCount}
//           onClickClearCompleted={this.handleClearCompleted}
//           onClickFilter={this.handleFilterChange}
//         />
//       </div>
//     );
//   }
// }
