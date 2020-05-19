package com.cg.gateway.util;

public class CustomerDto {

	private int id;

    private String name;
    
    private String role;
    
    private String password;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
    
	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}
    
    public String getPassword(){
        return password;
    }

    public void setPassword(String password){
        this.password=password;
    }

    

}
