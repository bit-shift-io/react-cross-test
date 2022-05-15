import React, {useEffect, useState} from 'react'
import {RecipeView} from './recipe.view'
import {getRecipe} from '../../services/github'
import {useQuery} from 'react-query'

export const Recipe = (props) => {
    const {url, path} = props.route.params
    const query = useQuery(['recipe', {path}], (args) => {
        const [_key, {path}] = args.queryKey
        return getRecipe(path)
    })

    return (
        <RecipeView loading={query.isLoading} content={query.data} />
    )
}