import { defineStore } from "pinia";

export const useApiStore = defineStore("api", {
    state: () => ({
        store: [],
    }),
    getters: {
        getStoreData: (state) => state.store,
    },
    actions: {
        async fetchData(url) {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                const data = await response.json();
                this.store = data;
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        },
    },
    
});
