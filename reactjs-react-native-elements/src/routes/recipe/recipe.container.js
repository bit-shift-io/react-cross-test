import React, {useEffect, useState} from 'react'
import {RecipeView} from './recipe.view'
import {getRecipe} from '../../services/github'
import {useQuery} from 'react-query'

export const Recipe = (props) => {
    const {url, path} = props.route.params
    const query = useQuery(['recipe', {path}], getRecipe(path))

    if (!query.isLoading) {
        console.log('loaded!')
    }
    if (query.data) {
        console.log('yay!')
    }
    return (
        <RecipeView loading={query.isLoading} item={query.data} />
    )
}