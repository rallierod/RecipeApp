package com.recipeApp.RecipeApp.Models;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Recipe {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;

    private String name;
    private String summary;
    private String prepTime;
    private String cookTime;
    private String servings;
    private Integer calories;
    private String nutrition;


    @ManyToMany
    private final List<RecipeIngredient>recipeIngredients = new ArrayList<>();

    @ManyToMany
    private final List<RecipeInstruction> recipeInstructions = new ArrayList<>();

    private String link;

    public Recipe() {

    }
    //no-args constructor

    public Recipe(Integer id, String name, String summary, String prepTime, String cookTime, String servings, Integer calories, String nutrition, String link) {
        this.id = id;
        this.name = name;
        this.summary = summary;
        this.prepTime = prepTime;
        this.cookTime = cookTime;
        this.servings = servings;
        this.calories = calories;
        this.nutrition = nutrition;
        this.link = link;
    }


    //constructor for manual recipe entry


    public Integer getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSummary() {
        return summary;
    }

    public void setSummary(String summary) {
        this.summary = summary;
    }

    public String getPrepTime() {
        return prepTime;
    }

    public void setPrepTime(String prepTime) {
        this.prepTime = prepTime;
    }

    public String getCookTime() {
        return cookTime;
    }

    public void setCookTime(String cookTime) {
        this.cookTime = cookTime;
    }

    public String getServings() {
        return servings;
    }

    public void setServings(String servings) {
        this.servings = servings;
    }

    public Integer getCalories() {
        return calories;
    }

    public void setCalories(Integer calories) {
        this.calories = calories;
    }

    public String getNutrition() {
        return nutrition;
    }

    public void setNutrition(String nutrition) {
        this.nutrition = nutrition;
    }

    public List<RecipeIngredient> getRecipeIngredients() {
        return recipeIngredients;
    }
    public void addRecipeIngredient(RecipeIngredient recipeIngredient){
        this.recipeIngredients.add(recipeIngredient);
    }

    public List<RecipeInstruction> getRecipeInstructions() {
        return recipeInstructions;
    }
    public void addRecipeInstruction(RecipeInstruction recipeInstruction) {
        this.recipeInstructions.add(recipeInstruction);
    }

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }
}

