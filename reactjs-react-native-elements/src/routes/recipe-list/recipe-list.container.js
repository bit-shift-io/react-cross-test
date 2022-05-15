import {useQuery} from 'react-query'
import React, {useEffect, useState} from 'react'
import {RecipeListView} from './recipe-list.view'
import {getRecipeList} from '../../services/github'

export const RecipeList = (props) => {
    const query = useQuery('recipe-list', getRecipeList)
    return (
        <RecipeListView loading={query.isLoading} items={query.data} />
    )
}