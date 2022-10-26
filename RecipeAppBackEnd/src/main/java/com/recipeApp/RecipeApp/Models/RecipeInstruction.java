package com.recipeApp.RecipeApp.Models;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
@Entity
public class RecipeInstruction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String recipeInstruction;

    @ManyToMany(mappedBy = "recipeInstructions")
    private final List<Recipe> recipes = new ArrayList<>();

    public RecipeInstruction(){
    }

    public RecipeInstruction(Integer id, String recipeInstruction) {
        this.id = id;
        this.recipeInstruction = recipeInstruction;
    }

    public Integer getId() {
        return id;
    }

    public String getRecipeInstruction() {
        return recipeInstruction;
    }

    public void setRecipeInstruction(String recipeInstruction) {
        this.recipeInstruction = recipeInstruction;
    }

    public List<Recipe> getRecipes() {
        return recipes;
    }
}
