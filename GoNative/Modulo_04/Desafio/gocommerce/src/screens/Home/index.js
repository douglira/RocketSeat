import React, { Component } from 'react';
import {
  View, Text, FlatList, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';

import { connect } from 'react-redux';
import { Creators as CategoriesActions } from 'store/ducks/categories';
import { Creators as ProductsActions } from 'store/ducks/products';

import styles from './styles';

class Home extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => <Icon name="home" size={26} color={tintColor} />,
  };

  static propTypes = {
    fetchProducts: PropTypes.func.isRequired,
    fetchCategories: PropTypes.func.isRequired,
    selectCategory: PropTypes.func.isRequired,
    unselectCategory: PropTypes.func.isRequired,
    categories: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          title: PropTypes.string,
        }),
      ),
    }).isRequired,
  };

  componentDidMount() {
    const { fetchCategories } = this.props;
    fetchCategories();
    this.fetchProducts();
  }

  onCategorySelect = (categoryId) => {
    const {
      unselectCategory,
      selectCategory,
      categories: { selected },
    } = this.props;

    if (categoryId === selected) {
      return unselectCategory();
    }
    return selectCategory(categoryId);
  };


  fetchProducts = () => {
    const {
      fetchProducts,
      categories: { selected },
    } = this.props;

    fetchProducts(selected);
  };

  renderCategoriesTabBar = ({ item: category }) => {
    const {
      categories: { selected },
    } = this.props;

    return (
      <TouchableOpacity
        onPress={() => this.onCategorySelect(category.id)}
        style={[styles.btnCategory, category.id === selected ? styles.btnCategorySelected : null]}
      >
        <Text
          style={[
            styles.textCategory,
            category.id === selected ? styles.textCategorySelected : null,
          ]}
        >
          {category.title}
        </Text>
      </TouchableOpacity>
    );
  };

  render() {
    const { categories } = this.props;

    return (
      <View style={styles.container}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          style={styles.tabBarCategoryWrapper}
          contentContainerStyle={styles.tabBarCategoryScroll}
          data={categories.data}
          extraData={categories}
          keyExtractor={item => String(item.id)}
          renderItem={this.renderCategoriesTabBar}
          horizontal
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
  products: state.products,
});

const mapDispatchToProps = dispatch => ({
  fetchProducts: categoryId => dispatch(ProductsActions.fetchProducts(categoryId)),
  fetchCategories: () => dispatch(CategoriesActions.fetchCategories()),
  selectCategory: id => dispatch(CategoriesActions.selectCategory(id)),
  unselectCategory: id => dispatch(CategoriesActions.unselectCategory(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
