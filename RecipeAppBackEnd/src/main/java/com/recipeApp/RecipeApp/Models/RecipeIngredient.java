package com.recipeApp.RecipeApp.Models;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
@Entity
public class RecipeIngredient {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Integer id;

    private Float amount;

    private String unit;

    private String recipeIngredient;

    @ManyToMany(mappedBy = "recipeIngredients")
    private final List<Recipe> recipes = new ArrayList<>();

    public RecipeIngredient(){
    }

    public RecipeIngredient(Integer id, Float amount, String unit, String recipeIngredient) {
        this.id = id;
        this.amount = amount;
        this.unit = unit;
        this.recipeIngredient = recipeIngredient;
    }

    public Integer getId() {
        return id;
    }

    public Float getAmount() {
        return amount;
    }

    public void setAmount(Float amount) {
        this.amount = amount;
    }

    public String getUnit() {
        return unit;
    }

    public void setUnit(String unit) {
        this.unit = unit;
    }

    public String getRecipeIngredient() {
        return recipeIngredient;
    }

    public void setRecipeIngredient(String recipeIngredient) {
        this.recipeIngredient = recipeIngredient;
    }

//    public List<Recipe> getRecipes() {
//        return recipes;
//    }
}
